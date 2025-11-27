#!/usr/bin/env python3
"""
Check for undefined LaTeX macros in FCLA flashcard data
"""

import json
import re
from collections import Counter

# Load the flashcard data
with open('fcla_data.js', 'r') as f:
    content = f.read()
    # Extract JSON from JS file
    json_str = content.replace('window.flashcardsData = ', '').rstrip(';')
    flashcards = json.loads(json_str)

# Known MathJax macros (from fcla.html)
DEFINED_MACROS = {
    'vv', 'operatorname', 'ker', 'im', 'rank', 'rref',
    'conjugate', 'complexes', 'complex', 'reals', 'real',
    'modulus', 'zerovector', 'zeromatrix', 'vect', 'scalarlist',
    'vectorlist', 'dimension', 'nullity', 'nsp', 'csp', 'rsp',
    'lns', 'detname', 'detbars', 'trace', 'innerproduct',
    'norm', 'per', 'spn', 'augmented', 'linearsystem',
    'homosystem', 'colvector',
    # Additional FCLA macros
    'ltdefn', 'set', 'transpose', 'adjoint', 'matrixentry',
    'inverse', 'lt', 'gt', 'lteval', 'ltinverse', 'compose',
    'matrixrep', 'vectrepname', 'eigenspace', 'rng', 'krn',
    'algmult', 'geomult', 'charpoly', 'preimage', 'similar',
    'sr', 'ds',
    # Final missing macros
    'vectorentry', 'vectrep', 'cbm', 'vec', 'submatrix',
    'isomorphic', 'vslt', 'setparts'
}

# Standard LaTeX commands that don't need definitions
STANDARD_LATEX = {
    'left', 'right', 'begin', 'end', 'text', 'quad', 'qquad',
    'times', 'cdot', 'ldots', 'cdots', 'dotsc', 'dots', 'vdots', 'ddots',
    'in', 'subset', 'subseteq', 'cup', 'cap', 'emptyset',
    'mathbb', 'mathbf', 'mathcal', 'mathrm', 'mathit',
    'frac', 'sqrt', 'sum', 'prod', 'int', 'lim',
    'leq', 'geq', 'neq', 'equiv', 'approx', 'sim',
    'alpha', 'beta', 'gamma', 'delta', 'epsilon', 'theta', 'lambda', 'mu', 'sigma', 'omega',
    'Gamma', 'Delta', 'Theta', 'Lambda', 'Sigma', 'Omega',
    'to', 'rightarrow', 'leftarrow', 'Rightarrow', 'Leftarrow', 'iff',
    'forall', 'exists', 'nexists', 'neg', 'wedge', 'vee',
    'perp', 'parallel', 'mid', 'nmid',
    'bmatrix', 'pmatrix', 'vmatrix', 'array', 'cases',
    'big', 'Big', 'bigg', 'Bigg',
    'lvert', 'rvert', 'lVert', 'rVert', 'langle', 'rangle',
    'lbrack', 'rbrack', 'lbrace', 'rbrace',
    'overline', 'underline', 'widehat', 'widetilde', 'underset',
    'displaystyle', 'textstyle', 'scriptstyle',
    'infty', 'partial', 'nabla', 'prime',
    'tfrac', 'dfrac', 'binom', 'choose', 'colon', 'c'
}

# Find all LaTeX commands in flashcard content
all_commands = Counter()

for card in flashcards:
    # Check both front and back
    for field in ['front', 'back']:
        text = card.get(field, '')
        # Find all \command patterns
        # Match \word or \word{...}
        commands = re.findall(r'\\([a-zA-Z]+)', text)
        all_commands.update(commands)

# Find undefined commands
undefined = set()
for cmd, count in all_commands.items():
    if cmd not in DEFINED_MACROS and cmd not in STANDARD_LATEX:
        undefined.add(cmd)

print("=" * 60)
print("LaTeX Macro Analysis")
print("=" * 60)
print(f"\nTotal unique commands found: {len(all_commands)}")
print(f"Defined FCLA macros: {len(DEFINED_MACROS)}")
print(f"Standard LaTeX commands: {len(STANDARD_LATEX)}")

if undefined:
    print(f"\n⚠️  UNDEFINED MACROS FOUND: {len(undefined)}")
    print("\nMost common undefined macros:")
    undefined_counts = [(cmd, all_commands[cmd]) for cmd in undefined]
    undefined_counts.sort(key=lambda x: x[1], reverse=True)
    
    for cmd, count in undefined_counts[:20]:
        print(f"  \\{cmd} - used {count} times")
    
    if len(undefined_counts) > 20:
        print(f"\n  ... and {len(undefined_counts) - 20} more")
else:
    print("\n✅ No undefined macros found!")

print("\n" + "=" * 60)
