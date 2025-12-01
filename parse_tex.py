import re
import json

def parse_tex(file_path):
    with open(file_path, 'r') as f:
        lines = f.readlines()

    flashcards = []
    current_card = None
    capture = False
    
    # Environments to capture
    envs = {
        'defn': 'Definition',
        'thm': 'Theorem',
        'prop': 'Proposition',
        'cor': 'Corollary',
        'tech': 'Technique',
        'warn': 'Warning',
        'notns': 'Notations',
        'bigidea': 'Big Idea'
    }

    env_stack = []
    current_chapter_num = 0
    current_chapter_title = "Introduction"

    for line in lines:
        stripped_line = line.strip()
        
        # Check for section (Chapter)
        # Need to handle nested braces in titles like "Subspaces of $\mathbb{R}^n$"
        section_match = re.match(r'\\section\{(.+)\}', stripped_line)
        if section_match:
            current_chapter_num += 1
            # Extract content between first { and last }
            title_content = section_match.group(1)
            # Convert to Unicode for display in dropdowns
            title_content = title_content.replace('$\\mathbb{R}^n$', 'ℝⁿ')
            title_content = title_content.replace('$\\mathbb{R}^{{n}}$', 'ℝⁿ')
            current_chapter_title = title_content
            continue

        # Check for start of environment
        match = re.match(r'\\begin\{(\w+)\}(\[(.*?)\])?', stripped_line)
        if match:
            env_type = match.group(1)
            title = match.group(3) if match.group(3) else ""
            
            if env_type in envs:
                if capture:
                    # Nested, ignore for now or treat as content
                    pass
                
                capture = True
                current_card = {
                    'type': env_type,
                    'type_human': envs[env_type],
                    'title': title,
                    'content': [],
                    'chapter_id': current_chapter_num,
                    'chapter_title': current_chapter_title
                }
                env_stack.append(env_type)
                continue

        # Check for end of environment
        if capture:
            end_match = re.match(r'\\end\{(\w+)\}', stripped_line)
            if end_match:
                ended_env = end_match.group(1)
                if env_stack and env_stack[-1] == ended_env:
                    env_stack.pop()
                    if not env_stack:
                        # Finished capturing this card
                        capture = False
                        
                        # Process content
                        # Remove leading/trailing lines that are just formatting noise like "\\" or "\"
                        cleaned_content = []
                        for l in current_card['content']:
                            s = l.strip()
                            if s == '\\' or s == '\\\\' or s == '':
                                continue
                            cleaned_content.append(l) # Keep original line for formatting, but maybe skip if it was just noise
                        
                        # Actually, better to just join and then clean up?
                        # The issue is that the original file has lines like:
                        # 309: \
                        # 310: \\
                        # These are explicit lines.
                        
                        # Let's filter out lines that are ONLY `\` or `\\` at the start of the block.
                        final_content = []
                        started_content = False
                        for l in current_card['content']:
                            s = l.strip()
                            if not started_content:
                                if s in ['\\', '\\\\', '']:
                                    continue
                                else:
                                    started_content = True
                            final_content.append(l)
                            
                        content_text = "".join(final_content).strip()
                        
                        # Generate Front
                        front = generate_front(current_card['type'], current_card['title'], content_text, envs)
                        
                        # Determine Category
                        category = "Definition" if current_card['type'] == 'defn' else "Theorem"
                        
                        # Add to list
                        flashcards.append({
                            'front': front,
                            'back': content_text,
                            'type': current_card['type_human'],
                            'title': current_card['title'],
                            'chapter_id': current_card['chapter_id'],
                            'chapter_title': current_card['chapter_title'],
                            'category': category
                        })
                        current_card = None
                    else:
                        # Nested end
                        current_card['content'].append(line)
                else:
                     current_card['content'].append(line)
            else:
                current_card['content'].append(line)

    return flashcards

def generate_front(env_type, title, content, envs):
    human_type = envs.get(env_type, env_type)
    
    if not title:
        # Try to extract a smart title from content
        smart_title = extract_smart_title(content)
        if smart_title:
            return f"State the {human_type}: {smart_title}"
        return f"State the {human_type}."
    
    if env_type == 'defn':
        return f"Define: {title}"
    elif env_type == 'thm':
        return f"State the Theorem: {title}"
    elif env_type == 'prop':
        return f"State the Proposition: {title}"
    elif env_type == 'cor':
        return f"State the Corollary: {title}"
    elif env_type == 'tech':
        return f"Explain the Technique: {title}"
    elif env_type == 'warn':
        return f"Warning: {title}"
    elif env_type == 'notns':
        return f"Notations for: {title}"
    elif env_type == 'bigidea':
        return f"Big Idea: {title}"
    else:
        return f"{title}"

def extract_smart_title(content):
    # Clean up content to find a good hint
    # 1. Check if first line is short and looks like a title (often ends with \\)
    lines = content.split('\n')
    if not lines:
        return ""
        
    first_line = lines[0].strip()
    
    # Remove LaTeX formatting for analysis
    clean_line = re.sub(r'\\textbf\{(.*?)\}', r'\1', first_line)
    clean_line = re.sub(r'\\textit\{(.*?)\}', r'\1', clean_line)
    clean_line = re.sub(r'\\\\', '', clean_line).strip()
    
    # Heuristic 1: Explicit title-like line
    if len(clean_line) > 0 and len(clean_line) < 100 and (first_line.endswith(r'\\') or ':' in first_line):
        return clean_line
        
    # Heuristic 2: "Consider..."
    match = re.match(r'Consider (?:a|an|the) (.*?)(?:\.|,|$)', clean_line, re.IGNORECASE)
    if match:
        return f"regarding {match.group(1)}"
        
    # Heuristic 3: "If..."
    match = re.match(r'If (.*?)(?:,|$)', clean_line, re.IGNORECASE)
    if match:
        condition = match.group(1)
        if len(condition) < 80:
            return f"if {condition}..."
            
    # Heuristic 4: "Let..."
    match = re.match(r'Let (.*?)(?:\.|,|$)', clean_line, re.IGNORECASE)
    if match:
        return f"regarding {match.group(1)}"

    # Heuristic 5: First sentence if reasonably short
    sentences = re.split(r'(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?)\s', clean_line)
    if sentences and len(sentences[0]) < 120:
        return sentences[0]

    # Fallback: Truncate
    return clean_line[:100] + "..." if len(clean_line) > 100 else clean_line

if __name__ == "__main__":
    cards = parse_tex("Linear_Algebra_Summary.tex")
    
    # Save as JSON (optional, but good for reference)
    with open("flashcards.json", "w") as f:
        json.dump(cards, f, indent=2)
        
    # Save as JS for local file access (CORS workaround)
    with open("data.js", "w") as f:
        f.write("window.flashcardsData = ")
        json.dump(cards, f, indent=2)
        f.write(";")
        
    print(f"Generated {len(cards)} flashcards.")
