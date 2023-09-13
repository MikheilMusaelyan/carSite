import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '../home/card/card';
import './profile.css'
import { useRef, useState } from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { handleFileInputChange } from '../shared/shared';

export default function Profile(props: any) {
  const fileInputRef = useRef(null)
  const [cartItem, set] = useState(
    {
      id: 1,
      price: 12,
      mileage: "",
      make: "",
      model: "",
      year: "",
      animation: "slidLeft",
      hp: "",
      name: "name",
      description: `The best desc`,
      images: [
        "https://miro.medium.com/max/3840/1*xMuIOwjliGUPjkzukeWKfw.jpeg",
        "https://miro.medium.com/max/3840/1*xMuIOwjliGUPjkzukeWKfw.jpeg",
        "/src/assets/ironwrist2.png",
      ],
      selectedImage: "/src/assets/irownbracelet.png",
    }
  )
  const [image, setImage] = useState(null)
  
  const handleImages = (event: any) => {
    const img = handleFileInputChange(event)[0];
    if (!img || img?.length <= 1) return
    setImage(img);
  }

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <main className='p-cart-main main-main'>

      <div className="profile-wrap-main">
        <div className="p-left-side">
          <div className="p-seller-img-wrap">
            <img className="p-seller-img" src="/src/assets/irownbracelet.png" />
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleImages}
            />
            <div className="p-add-image-abs" onClick={handleUploadButtonClick}>
              <FontAwesomeIcon icon={faPlus} className='add-image-icon' />
            </div>
          </div>
          <div className="p-seller-name-wrap">
            <span className="p-seller-name">Dato</span>
            <span className="p-listing-count">35 Listings</span>
          </div>
        </div>

        <div className="p-right-side">
          <button className='add-listing'>
            <FontAwesomeIcon icon={faPlus} className='add-listing-icon' />
            <span className='add-listing-span'>Add</span>
          </button>
        </div>
      </div>

      <div className="listings-wrap">
        <ul className="ul ul-profile">
          <Card item={cartItem} editable={true}/>
        </ul>
      </div>
    </main>
  );
}