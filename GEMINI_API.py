import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()
print(os.getenv("API_KEY"))
API_KEY = os.getenv("API_KEY")
genai.configure(api_key = API_KEY)
# The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
model = genai.GenerativeModel('gemini-1.5-flash')


# G enerate text
while True:
    data_input = input ("Enter text: ")
    if data_input == "exit":
        break
    else:
        response = model.generate_content(data_input)
        print(response.parts[0].text)
        