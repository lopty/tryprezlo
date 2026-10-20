from PIL import Image, ImageDraw, ImageFont
from pathlib import Path
image = Image.new('RGB', (1200, 630), '#fafaf7')
draw = ImageDraw.Draw(image)
font_path = 'C:/Windows/Fonts/segoeui.ttf'
bold_path = 'C:/Windows/Fonts/seguisb.ttf'
font = lambda size: ImageFont.truetype(font_path, size)
bold = lambda size: ImageFont.truetype(bold_path, size)
draw.text((80, 48), 'prezlo', fill='#242721', font=bold(54))
draw.text((230, 48), '.', fill='#e66b3f', font=bold(54))
draw.text((80, 165), 'Your next customer', fill='#242721', font=font(68))
draw.text((80, 247), 'is asking AI.', fill='#242721', font=font(68))
draw.text((80, 336), 'Will it mention you?', fill='#d65f34', font=font(68))
draw.line((80, 486, 1120, 486), fill='#dfe3d5', width=2)
draw.text((80, 520), 'AI visibility and GEO for agencies and brands', fill='#626d55', font=font(27))
draw.text((904, 524), 'tryprezlo.com', fill='#626d55', font=font(25))
image.save(Path('public/assets/social-preview.png'), optimize=True)
print('Created social-preview.png at 1200 x 630.')
