import re

# Example movie data as a multiline string.
movies_data = """\
The Half of It (6.5/10, 20200612)
Searching (7/10, 20200612)
The Farewell (8.5/10, 20200612)
Blade Runner 2049 (4.5/10, 20200614)
Gladiator (7.5/10, 20200615)
"""

movies_list = []

# Process each line in the movie data.
for line in movies_data.splitlines():
    if not line.strip():
        continue

    # Extract the movie name by taking the part before the first " (".
    movie_name = line.split(" (")[0].strip()
    
    # Find all text within parentheses.
    paren_groups = re.findall(r'\((.*?)\)', line)
    
    rating = None
    date = None
    rating_str = None
    
    # Look for the parenthetical group containing the rating (formatted as X/10).
    for group in paren_groups:
        # Split the group by commas and trim spaces.
        tokens = [token.strip() for token in group.split(',')]
        for i, token in enumerate(tokens):
            if re.match(r'^\d+(\.\d+)?/10$', token):
                rating_str = token
                rating = float(token.split('/')[0])
                # If there's a next token, treat it as the watched date.
                if i + 1 < len(tokens):
                    date = tokens[i + 1]
                break
        if rating is not None:
            break
    
    # Add the movie as long as a rating was found.
    if rating is not None:
        movies_list.append((movie_name, rating_str, date if date is not None else "", rating))

# Sort movies in descending order by the numerical rating.
movies_list.sort(key=lambda x: x[3], reverse=True)

# Print the sorted movies with movie name, rating, and watched date (if available).
for movie in movies_list:
    print(f"{movie[0]}, {movie[1]}, {movie[2]}")
