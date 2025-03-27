from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend communication

# Load pre-trained chatbot model (DialoGPT)
model_name = "microsoft/DialoGPT-medium"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(model_name)

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    user_input = data.get("message", "")

    if not user_input:
        return jsonify({"response": "Please enter a message."})

    # Tokenize input and generate response
    input_ids = tokenizer.encode(user_input + tokenizer.eos_token, return_tensors="pt")
    response_ids = model.generate(input_ids, max_length=1000, pad_token_id=tokenizer.eos_token_id)
    chatbot_response = tokenizer.decode(response_ids[:, input_ids.shape[-1]:][0], skip_special_tokens=True)

    return jsonify({"response": chatbot_response})

if __name__ == "__main__":
    app.run(debug=True, port=5001)  # Run on port 5001
