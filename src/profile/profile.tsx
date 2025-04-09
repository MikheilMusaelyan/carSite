import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '../home/card/card';
import './profile.css'
import { useRef, useState } from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { handleFileInputChange } from '../shared/shared';

export default function Profile() {
  const fileInputRef = useRef(null)
  const cartItem = 
    {
      id: 1,
      price: 12,
      mileage: "",
      make: "",
      model: "",
      year: "",
      animation: "slidLeft",
      hp: "",
      name: "Car",
      description: ``,
      images: [
        "https://i.insider.com/5f3fec4c42f43f001ddfe52f?width=700",
        "https://vehicle-images.dealerinspire.com/b519-11001857/2HGFE4F86SH324098/779f4ca8fdc3f0e96a38a4daeba78a53.jpg",
        "https://www.heraldnet.com/wp-content/uploads/2019/10/18935367_web1_M3-Cars-edh-191014-1024x682.jpg"
      ],
      selectedImage: "https://i.insider.com/5f3fec4c42f43f001ddfe52f?width=700",
    }
  const [image, setImage] = useState(null)
  
  const handleImages = (event: any) => {
    const img = handleFileInputChange(event)[0];
    if (!img || img?.length <= 1) return
    setImage(img);
  }

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  const cardEdit = (editedItem) => {
    console.log(editedItem)
    // Implement your edit logic here and update the 'items' state
    // For example, you can open a modal for editing and update the item in the array.
  };

  const cardRemove = (removedItem) => {
    console.log(removedItem)

    // Implement your delete logic here and update the 'items' state
    // For example, filter out the item from the array.
  };

  return (
    <main className='p-cart-main main-main'>

      <div className="profile-wrap-main">
        <div className="p-left-side">
          <div className="p-seller-img-wrap">
            <img className="p-seller-img" src={image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTugGK9j-9h5_GoIWKVFC4m2yg-Sxs-N50A-w&s"} />
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
            <span className="p-seller-name">John</span>
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
          <Card editCard={cardEdit} removeCard={cardRemove} item={cartItem} editable={true}/>
        </ul>
      </div>
    </main>
  );
}