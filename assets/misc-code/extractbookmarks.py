from bs4 import BeautifulSoup

# Load the exported bookmarks.html file
with open("bookmarks.html", "r", encoding="utf-8") as file:
    soup = BeautifulSoup(file, "html.parser")

# Extract all links that contain "wikipedia.org/wiki/"
wikipedia_links = [
    link.get("href") for link in soup.find_all("a", href=True)
    if "wikipedia.org/wiki/" in link.get("href")
]

# Format links as a JavaScript array
js_array = "const bookmarks = [\n"
js_array += ",\n".join(f'    "{link}"' for link in wikipedia_links)
js_array += "\n];"

# Save the JavaScript array to a file
with open("bookmarks.js", "w", encoding="utf-8") as output_file:
    output_file.write(js_array)

print("Bookmarks have been exported to bookmarks.js.")
