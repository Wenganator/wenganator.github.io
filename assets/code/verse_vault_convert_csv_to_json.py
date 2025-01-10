# Instructions on how to use this script:
# Place your CSV file (bible_verses.csv) in the same directory as this script.
# The CSV file should be formatted with the following headings: Testament Book Reference ESV KJV NASB NIV NKJV
# Run the script in terminal: python verse_vault_convert_csv_to_json.py
# The JSON file (bible_verses.json) will be generated in the same directory.

import csv
import json

# Define output structure
output = {"Old": {}, "New": {}}

try:
    # Open CSV file
    with open('bible_verses.csv', mode='r', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)

        # Strip BOM from headers
        # The issue you're facing ('\ufeffTestament') is caused by a Byte Order Mark (BOM) being present in your CSV file. This can occur if the file was saved in UTF-8 with BOM encoding. The BOM (\ufeff) is an invisible character that some tools add to the beginning of a file to indicate its encoding.
        # The line reader.fieldnames = [name.lstrip('\ufeff') for name in reader.fieldnames] removes the BOM character (\ufeff) from the column name, making it accessible as 'Testament'.
        # Alternative: Fix CSV File. If you'd rather fix the issue at the source: 1) Open the CSV file in a text editor like Notepad++ or VS Code. 2) Choose "Save As" and ensure the encoding is set to UTF-8 (without BOM). 3) Save the file and rerun the original script.
        reader.fieldnames = [name.lstrip('\ufeff') for name in reader.fieldnames]

        # Print headers for debugging
        print("CSV Headers (after normalization):", reader.fieldnames)

        # Process rows
        for row in reader:
            testament = row['Testament'].strip()  # Normalize header
            book = row['Book'].strip()
            reference = row['Reference'].strip()
            translation_data = {
                "ESV": row.get('ESV', '').strip(),
                "KJV": row.get('KJV', '').strip(),
                "NASB": row.get('NASB', '').strip(),
                "NIV": row.get('NIV', '').strip(),
                "NKJV": row.get('NKJV', '').strip()
            }

            # Structure data
            if book not in output[testament]:
                output[testament][book] = []
            output[testament][book].append({"reference": reference, **translation_data})

    # Write JSON to file
    with open('bible_verses.json', mode='w', encoding='utf-8') as jsonfile:
        json.dump(output, jsonfile, indent=4, ensure_ascii=False)

    print("JSON file successfully created: bible_verses.json")

except KeyError as e:
    print(f"Error: Missing column in CSV file - {e}")
except Exception as e:
    print(f"An error occurred: {e}")









# # Original Python script
# import csv
# import json

# # Input and output file paths
# csv_file_path = 'bible_passages.csv'  # Replace with your CSV file name
# json_file_path = 'bible_passages.json'  # Desired JSON output file name

# # Create a nested structure
# data = {}
# with open(csv_file_path, mode='r', encoding='utf-8') as csvfile:
#     reader = csv.DictReader(csvfile)
#     for row in reader:
#         testament = row['Testament']
#         book = row['Book']
#         reference = row['Reference']
#         translations = {key: row[key] for key in ['ESV', 'KJV', 'NASB', 'NIV', 'NKJV']}
        
#         # Ensure testament and book exist in the nested dictionary
#         if testament not in data:
#             data[testament] = {}
#         if book not in data[testament]:
#             data[testament][book] = []

#         # Add the verse details
#         data[testament][book].append({
#             'reference': reference,
#             **translations
#         })

# # Write the JSON file
# with open(json_file_path, mode='w', encoding='utf-8') as jsonfile:
#     json.dump(data, jsonfile, indent=4, ensure_ascii=False)

# print(f"JSON file saved to {json_file_path}")