from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api')
def api():
     return jsonify('dl;okjfjas;ldfkjasl;kdfjas;ldkf!')

if __name__ == "__main__":
     app.run(debug=True)