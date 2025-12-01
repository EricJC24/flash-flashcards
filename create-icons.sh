#!/bin/bash

# Simple script to create placeholder PWA icons
# You can replace these with proper icons later

echo "🎨 Creating placeholder PWA icons..."

# Create icons directory
mkdir -p icons

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "❌ ImageMagick not found. Installing..."
    echo "Run: brew install imagemagick"
    echo ""
    echo "Or create icons manually using an online tool:"
    echo "https://www.pwabuilder.com/imageGenerator"
    exit 1
fi

# Create icons with a gradient purple background and white text
SIZES=(72 96 128 144 152 192 384 512)

for size in "${SIZES[@]}"; do
    echo "Creating ${size}x${size} icon..."

    # Create a gradient background with "F" letter
    convert -size ${size}x${size} \
        -background none \
        -gravity center \
        \( -size ${size}x${size} gradient:"#a855f7"-"#ec4899" \) \
        \( -pointsize $((size * 60 / 100)) \
           -font "Helvetica-Bold" \
           -fill white \
           label:"F" \) \
        -composite \
        icons/icon-${size}x${size}.png

    echo "✓ Created icons/icon-${size}x${size}.png"
done

echo ""
echo "✅ All icons created successfully!"
echo ""
echo "Icons are in the ./icons/ directory"
echo "You can replace these with custom icons anytime."
echo ""
echo "To use these icons:"
echo "  git add icons/"
echo "  git commit -m 'Add PWA icons'"
echo "  git push origin main"
