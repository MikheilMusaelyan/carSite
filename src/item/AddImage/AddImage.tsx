import { useState, useRef } from 'react';
import { handleFileInputChange } from '../../shared/shared';
import './AddImage.css'

export default function AddImage({ parentImages, onImageChange }) {
  const [images, setImages] = useState(parentImages);
  const fileInputRef = useRef(null);

  // Function to handle the file input change event
  
  const handleImages = (event: any) => {
    const imgs = handleFileInputChange(event);
    const maxToAdd = 10 - images.length;
    if (maxToAdd <= 0) return
    imgs.splice(10 - images.length);
    const newImages = [...images, ...imgs];
    setImages(newImages);
    onImageChange(newImages);
  }

  const handleRemoveImage = (index: any) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
    onImageChange(updatedImages)
  };

  // Function to trigger the file input click
  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className='addImage-main'>
      <div className="addImage-main-relative">
      <button className='addImage-button' onClick={handleUploadButtonClick}>
        {images.length <= 0 ? "Uplaod at least 1 image" : 'Upload'}
      </button>
          {images.map((image: string, index: number) => (
            <div key={index} className='addImage-image-wrap'>
              <img className='addImage-image' src={image} alt={`Uploaded ${index}`} />
              <div className="addImage-remove" onClick={() => handleRemoveImage(index)}>
                x
              </div>
            </div>
          ))}
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