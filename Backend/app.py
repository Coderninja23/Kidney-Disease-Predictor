from flask import Flask, request, jsonify
from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
import joblib

app = Flask(__name__)
model = joblib.load('kidney2.joblib')



@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    features = data['features']  
    prediction = model.predict([features])[0]
    return jsonify({'prediction': prediction})

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000') 
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    return response


if __name__ == '__main__':
    app.run(port=5000)


app = Flask(__name__)
CORS(app)  # Add this line to enable CORS