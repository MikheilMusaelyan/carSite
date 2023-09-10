import { useState, useRef } from 'react';
import { handleFileInputChange } from '../../shared/shared';
import './AddImage.css'

export default function AddImage({ onImageChange }) {
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);

  // Function to handle the file input change event
  
  const handleImages = (event: any) => {
    if(images.length > 4){
      return 
    }
    const newImages = [...images, ...handleFileInputChange(event)];
    setImages(newImages)

    onImageChange(images)
  }

  const handleRemoveImage = (index: any) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
    onImageChange(images)
  };

  // Function to trigger the file input click
  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className='addImage-main'>
      <div className="addImage-main-relative">

          {images.map((image, index) => (
            <div key={index} className='addImage-image-wrap'>
              <img className='addImage-image' src={image} alt={`Uploaded ${index}`} />
              <div className="addImage-remove" onClick={() => handleRemoveImage(index)}>
                x
              </div>
            </div>
          ))}
          <button className='addImage-button' onClick={handleUploadButtonClick}>Upload</button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleImages}
            multiple
          />

      </div>
    </div>
  );
}