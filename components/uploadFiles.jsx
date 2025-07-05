'use client';

import { useState } from 'react';

export default function ImageVideoUpload() {
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    const fileType = selectedFile.type;

    if (!fileType.startsWith('image/') && !fileType.startsWith('video/')) {
      alert('Please upload an image or video file');
      return;
    }

    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
    setUploadStatus('');
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        setUploadStatus(`✅ Uploaded! View at: ${data.url}`);
      } else {
        setUploadStatus(`❌ Error: ${data.error}`);
      }
    } catch (err) {
      console.error(err);
      setUploadStatus('❌ Upload failed');
    }
  };

  return (
    <div>
      <label htmlFor="fileUpload">Upload an image or video:</label>
      <input
        type="file"
        id="fileUpload"
        accept="image/,video/"
        onChange={handleFileChange}
      />

      {preview && (
        <div style={{ marginTop: '20px' }}>
          {file.type.startsWith('image/') ? (
            <img src={preview} alt="Preview" width="300" />
          ) : (
            <video width="300" controls>
              <source src={preview} type={file.type} />
            </video>
          )}
        </div>
      )}

      <button onClick={handleUpload} style={{ marginTop: '15px' }}>
        Upload
      </button>

      {uploadStatus && <p style={{ marginTop: '10px' }}>{uploadStatus}</p>}
    </div>
  );
}