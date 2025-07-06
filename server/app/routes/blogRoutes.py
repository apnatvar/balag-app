from flask import Blueprint, current_app, request, jsonify
import json
import os

bp = Blueprint("blogRoutes", __name__, url_prefix="/blog")

@bp.route("/", methods=["GET"])
def getAllBlogs():
    with open(current_app.config['blogFilePath'], "r") as f:
        return jsonify(json.load(f))


@bp.route("/getblog", methods=["GET"])
def getBlogByTitle():
    title = request.args.get("title")
    if not title:
        return jsonify({"error": "Title parameter is required"}), 400

    if not os.path.exists(current_app.config['blogFilePath']):
        return jsonify({"error": "Content file not found"}), 404

    with open(current_app.config['blogFilePath'], "r") as f:
        data = json.load(f)

    blogs = data.get("blogs", {})
    blog = blogs.get(title)
    if not blog:
        return jsonify({"error": f"No blog found with title '{title}'"}), 404

    return jsonify(blog)
