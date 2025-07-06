from flask import Blueprint, request, jsonify, send_from_directory, current_app
import os
from werkzeug.utils import secure_filename

bp = Blueprint('mediaRoutes', __name__, url_prefix='/media')

allowedImageExtensions = {'png', 'jpg', 'jpeg', 'gif'}
allowedVideoExtensions = {'mp4', 'mov', 'avi'}

def isAllowedFile(filename, mediaType):
    if '.' not in filename:
        return False
    ext = filename.rsplit('.', 1)[1].lower()
    if mediaType == 'image':
        return ext in allowedImageExtensions
    elif mediaType == 'video':
        return ext in allowedVideoExtensions
    return False

@bp.route('/upload/<mediaType>', methods=['POST'])
def uploadFile(mediaType):
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'Empty filename'}), 400

    if mediaType not in ['image', 'video']:
        return jsonify({'error': 'Invalid media type'}), 400

    if file and isAllowedFile(file.filename, mediaType):
        filename = secure_filename(file.filename)
        uploadFolder = current_app.config[
            'uploadFolderImages' if mediaType == 'image' else 'uploadFolderVideos'
        ]
        os.makedirs(uploadFolder, exist_ok=True)
        file.save(os.path.join(uploadFolder, filename))
        return jsonify({'message': 'File uploaded successfully', 'filename': filename}), 201

    return jsonify({'error': 'Invalid file type'}), 400

@bp.route('/view/<mediaType>/<filename>', methods=['GET'])
def viewFile(mediaType, filename):
    folder = current_app.config[
        'uploadFolderImages' if mediaType == 'image' else 'uploadFolderVideos'
    ]
    return send_from_directory(folder, filename)

@bp.route('/delete/<mediaType>/<filename>', methods=['DELETE'])
def deleteFile(mediaType, filename):
    folder = current_app.config[
        'uploadFolderImages' if mediaType == 'image' else 'uploadFolderVideos'
    ]
    filePath = os.path.join(folder, filename)
    if os.path.exists(filePath):
        os.remove(filePath)
        return jsonify({'message': 'File deleted successfully'}), 200
    return jsonify({'error': 'File not found'}), 404
