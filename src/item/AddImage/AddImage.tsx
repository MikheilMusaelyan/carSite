import { useState, useRef } from 'react';

function ImageUploader() {
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileInputChange = (event: any) => {
    const selectedImages = event.target.files;
    const imageArray = [];

    for (let i = 0; i < selectedImages.length; i++) {
      const imageURL = URL.createObjectURL(selectedImages[i]);
      imageArray.push({ url: imageURL, file: selectedImages[i] });
    }

    setImages(imageArray);
  };

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <button onClick={handleUploadButtonClick}>Upload Images</button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileInputChange}
        multiple // Allow multiple file selection
      />

      {/* Display the selected images */}
      {images.map((image, index) => (
        <img key={index} src={image.url} alt={`Uploaded ${index}`} />
      ))}
    </div>
  );
}

export default ImageUploader;
