from flask import Flask, jsonify
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__)
CORS(app)

def get_greeting():
    current_hour = datetime.now().hour
    if current_hour < 12:
        return "Good Morning"  # Good Morning
    elif 12 <= current_hour < 18:
        return "Good Afternoon"  # Good Afternoon
    else:
        return "Good Evening"  # Good Evening

@app.route('/greeting', methods=['GET'])
def greeting():
    greeting_message = get_greeting()
    return jsonify({"greeting": greeting_message}), 200, {'Content-Type': 'application/json; charset=utf-8'}

if __name__ == '__main__':
    app.run(debug=True)
