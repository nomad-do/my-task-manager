from PIL import Image, ImageDraw, ImageFont

def create_icon(size, text, filename, bg_color, text_color):
    # Create a blank image with a colored background
    image = Image.new('RGB', (size, size), bg_color)
    draw = ImageDraw.Draw(image)
    
    # Define font size and type
    font_size = size // 4
    try:
        font = ImageFont.truetype("arial.ttf", font_size)
    except IOError:
        font = ImageFont.load_default()
    
    # Calculate text size and position using textbbox
    text_bbox = draw.textbbox((0, 0), text, font=font)
    text_width = text_bbox[2] - text_bbox[0]
    text_height = text_bbox[3] - text_bbox[1]
    text_x = (size - text_width) / 2
    text_y = (size - text_height) / 2
    
    # Draw text on the image
    draw.text((text_x, text_y), text, fill=text_color, font=font)
    
    # Save the image as PNG
    image.save(filename)
    print(f"{filename} created successfully.")

# Create 192x192 icon with improved design
create_icon(192, '192x192', 'public/icon-192x192.png', bg_color='blue', text_color='white')

# Create 512x512 icon with improved design
create_icon(512, '512x512', 'public/icon-512x512.png', bg_color='blue', text_color='white')
