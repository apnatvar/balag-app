from flask import Blueprint, jsonify, request, current_app, render_template
import json
import os

bp = Blueprint('jsonRoutes', __name__, url_prefix='/json')

@bp.route('/.well-known/appspecific/com.chrome.devtools', methods=['GET'])
def chrome_devtools():
    return {}, 200

@bp.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@bp.route('/data', methods=['GET'])
def getJson():
    if not os.path.exists(current_app.config['jsonFilePath']):
        return jsonify({"error": "JSON file not found"}), 404
    
    with open(current_app.config['jsonFilePath'], 'r') as f:
        return jsonify(json.load(f))

@bp.route('/data', methods=['POST'])
def updateJson():
    newData = request.get_json()

    if not os.path.exists(current_app.config['jsonFilePath']):
        return jsonify({"error": "JSON file not found"}), 404
    
    with open(current_app.config['jsonFilePath'], 'w') as f:
        json.dump(newData, f, indent=2)
    return jsonify({'message': 'JSON updated successfully'}), 200

@bp.route('/partial-data', methods=["GET", "POST"])
def handleJson():
    if request.method == "GET":
        section = request.args.get("section")
        subsection = request.args.get("subsection")

        if not os.path.exists(current_app.config['jsonFilePath']):
            return jsonify({"error": "JSON file not found"}), 404

        with open(current_app.config['jsonFilePath'], "r") as f:
            data = json.load(f)

        if section:
            if section not in data:
                return jsonify({"error": f"Section '{section}' not found"}), 404
            sectionData = data[section]

            if subsection:
                if isinstance(sectionData, dict) and subsection in sectionData:
                    return jsonify({subsection: sectionData[subsection]})
                else:
                    return jsonify({"error": f"Subsection '{subsection}' not found in '{section}'"}), 404

            return jsonify({section: sectionData})

        return jsonify(data)

    elif request.method == "POST":
        try:
            newData = request.get_json()
            with open(current_app.config['jsonFilePath'], "w") as f:
                json.dump(newData, f, indent=2)
            return jsonify({"message": "JSON updated successfully"})
        except Exception as e:
            return jsonify({"error": str(e)}), 500