// UploadImage.js
import React, { useState } from "react";
import { storage } from "./firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function UploadImage() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");

  const handleUpload = async () => {
    if (!image) return;

    const imageRef = ref(storage, `products/${image.name}`);

    await uploadBytes(imageRef, image);
    const downloadURL = await getDownloadURL(imageRef);

    setUrl(downloadURL);
    alert("Uploaded Successfully!");
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>

      {url && (
        <div>
          <p>Preview:</p>
          <img src={url} alt="uploaded" width="150" />
        </div>
      )}
    </div>
  );
}

export default UploadImage;