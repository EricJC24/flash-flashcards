#!/usr/bin/env python3
"""
Simplified FCLA scraper - directly parses section pages with embedded definitions/theorems
"""

import requests
from bs4 import BeautifulSoup
import json
import re
import time

BASE_URL = "http://linear.pugetsound.edu/fcla/"

# List of section pages that contain definitions and theorems
# Based on the table of contents structure
SECTION_PAGES = [
    "section-SSLE.html",  # Solving Systems
    "section-RREF.html",  # RREF
    "section-TSS.html",   # Types of solution sets
    "section-HSE.html",   # Homogeneous systems
    "section-NM.html",    # Nonsingular matrices
    "section-VO.html",    # Vector operations
    "section-LC.html",    # Linear combinations
    "section-SS.html",    # Spanning sets
    "section-LI.html",    # Linear independence
    "section-LDS.html",   # Linear dependence
    "section-O.html",     # Orthogonality
    "section-MO.html",    # Matrix operations
    "section-MM.html",    # Matrix multiplication
    "section-MISLE.html", # Matrix inverses
    "section-MINM.html",  # More on inverses
    "section-CRS.html",   # Column and row spaces
    "section-FS.html",    # Four subsets
    "section-VS.html",    # Vector spaces
    "section-S.html",     # Subspaces
    "section-LISS.html",  # LI and spanning sets
    "section-B.html",     # Bases
    "section-D.html",     # Dimension
    "section-DM.html",    # Determinants
    "section-EE.html",    # Eigenvalues
    "section-SD.html",    # Similarity
    "section-LT.html",    # Linear transformations
    "section-ILT.html",   # Injective LT
    "section-SLT.html",   # Surjective LT
    "section-IVLT.html",  # Invertible LT
    "section-VR.html",    # Vector representations
    "section-MR.html",    # Matrix representations
    "section-CB.html",    # Change of basis
    "section-OD.html",    # Orthonormal diagonalization
]

def extract_from_section(url):
    """Extract all definitions and theorems from a section page"""
    try:
        print(f"Fetching {url}...")
        response = requests.get(BASE_URL + url)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, 'html.parser')
        
        items = []
        
        # Extract section title from h2 heading
        section_title = None
        for h2 in soup.find_all('h2'):
            text = h2.get_text().strip()
            # Format: "Section SSLE Solving Systems of Linear Equations"
            match = re.search(r'Section\s+\w+\s+(.*?)$', text)
            if match:
                section_title = match.group(1).strip()
                break
        
        # Find all heading elements that might contain definitions/theorems
        for heading in soup.find_all(['h4', 'h5', 'h6']):
            text = heading.get_text().strip()
            
            # Check if it's a definition or theorem
            if text.startswith('Definition ') or text.startswith('Theorem '):
                item_type = 'Definition' if text.startswith('Definition') else 'Theorem'
                
                # Extract acronym and full title
                # Format: "Definition SLE. System of Linear Equations."
                # or: "Theorem EOPSS. Equation Operations Preserve Solution Sets"
                acronym = ""
                full_title = ""
                
                # Try pattern: "Definition ACRONYM. Full Title"
                match = re.search(r'(?:Definition|Theorem)\s+(\w+)\.\s*(.*?)$', text)
                if match:
                    acronym = match.group(1)
                    full_title = match.group(2).rstrip('.')
                else:
                    # Fallback: just "Definition ACRONYM"
                    match2 = re.search(r'(?:Definition|Theorem)\s+(\w+)', text)
                    if match2:
                        acronym = match2.group(1)
                        full_title = acronym
                
                # Get content from following paragraphs
                content_parts = []
                sibling = heading.find_next_sibling()
                
                while sibling and len(content_parts) < 10:  # Increased from 5 to 10
                    if sibling.name in ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']:
                        break
                    if sibling.name in ['p', 'div']:  # Also capture div elements
                        # Get text but preserve some structure
                        text_content = sibling.get_text(separator=' ', strip=True)
                        if text_content and len(text_content) > 10:
                            content_parts.append(text_content)
                    sibling = sibling.find_next_sibling()
                
                if content_parts:
                    content = '\n\n'.join(content_parts)
                    
                    section_code = url.replace('section-', '').replace('.html', '')
                    items.append({
                        'type': item_type,
                        'acronym': acronym,
                        'full_title': full_title if full_title else acronym,
                        'content': content,
                        'section': section_code,
                        'section_title': section_title if section_title else section_code
                    })
        
        return items
        
    except Exception as e:
        print(f"Error processing {url}: {e}")
        return []

def create_flashcards():
    """Extract all definitions and theorems from all sections"""
    all_items = []
    
    for section in SECTION_PAGES:
        items = extract_from_section(section)
        all_items.extend(items)
        time.sleep(0.5)  # Be nice to the server
    
    # Convert to flashcard format
    flashcards = []
    for item in all_items:
        # Use full title if available, otherwise acronym
        title_text = item['full_title'] if item['full_title'] else item['acronym']
        
        if item['type'] == 'Definition':
            front = f"Define: {title_text}"
        else:
            front = f"State the Theorem: {title_text}"
        
        flashcard = {
            'front': front,
            'back': item['content'],
            'type': item['type'],
            'title': title_text,
            'section': item['section'],
            'section_title': item.get('section_title', item['section']),
            'category': item['type']
        }
        flashcards.append(flashcard)
    
    return flashcards

if __name__ == "__main__":
    print("Starting FCLA flashcard scraper (section-based approach)...")
    
    flashcards = create_flashcards()
    
    definitions = [f for f in flashcards if f['type'] == 'Definition']
    theorems = [f for f in flashcards if f['type'] == 'Theorem']
    
    print(f"\nExtracted:")
    print(f"  {len(definitions)} definitions")
    print(f"  {len(theorems)} theorems")
    print(f"  {len(flashcards)} total flashcards")
    
    # Save as JS file
    with open("fcla_data.js", "w", encoding='utf-8') as f:
        f.write("window.flashcardsData = ")
        json.dump(flashcards, f, indent=2, ensure_ascii=False)
        f.write(";")
    
    print(f"\nSaved to fcla_data.js")
