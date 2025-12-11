from PIL import Image
import numpy as np

def extract_color_histogram(image_stream):
    # Open the image from an in-memory stream
    image = Image.open(image_stream).convert("RGB").resize((100, 100))
    
    # Extract color histogram with 512 bins (256 levels per channel * 2 for 3 channels)
    # This creates a proper histogram instead of flattening raw pixels
    hist = np.histogram(np.array(image).ravel(), bins=512, range=(0, 256))[0]
    
    # Normalize the histogram to sum to 1
    hist = hist / hist.sum()
    
    return hist