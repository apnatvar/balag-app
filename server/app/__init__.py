from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from app.routes import mediaRoutes, jsonRoutes, blogRoutes, authRoutes
import os

def createApp():
    app = Flask(__name__)
    app.config['uploadFolderImages'] = 'app/static/uploads/images'
    app.config['uploadFolderVideos'] = 'app/static/uploads/videos'
    app.config['jsonFilePath'] = 'app/data/data.json'
    app.config['blogFilePath'] = 'app/data/blogs.json'
    app.config['userFilePath'] = 'app/data/users.json'
    app.config["JWT_SECRET_KEY"] = "super-secret-key"
    
    # Enable CORS for all routes
    CORS(app)
    JWTManager(app)

    app.register_blueprint(mediaRoutes.bp)
    app.register_blueprint(jsonRoutes.bp)
    app.register_blueprint(blogRoutes.bp)
    app.register_blueprint(authRoutes.bp)

    return app