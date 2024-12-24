import pyttsx3
import PyPDF2
from tkinter import Tk
from tkinter.filedialog import askopenfilename


root = Tk()
root.withdraw()


book = askopenfilename(title="Select a PDF", filetypes=[("PDF Files", "*.pdf")])
if not book:
    print("No file selected!")
    exit()


try:
    pdfreader = PyPDF2.PdfReader(book)
    pages = len(pdfreader.pages)
except Exception as e:
    print(f"Error reading PDF: {e}")
    exit()


player = pyttsx3.init()


for num in range(pages):
    try:
        page = pdfreader.pages[num]
        text = page.extract_text()
        player.say(text)
        player.runAndWait()
    except Exception as e:
        print(f"Error reading page {num + 1}: {e}")

print("Finished reading the PDF!")