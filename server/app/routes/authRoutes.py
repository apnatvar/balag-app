from flask import Blueprint, request, jsonify, current_app
from flask_jwt_extended import create_access_token
from werkzeug.security import check_password_hash
import json

bp = Blueprint("authRoutes", __name__)

@bp.route("/auth/login", methods=["POST"])
def login():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    with open(current_app.config['userFilePath'], "r") as f:
        users = json.load(f)

    user = users.get(username)
    if user and check_password_hash(user["password"], password):
        token = create_access_token(identity=username)
        return jsonify(access_token=token), 200
    else:
        return jsonify(error="Invalid credentials"), 401
