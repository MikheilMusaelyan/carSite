import './item.css'
import { useState, useEffect } from "react";
// import { ItemShape } from "./item-shape";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCar, faFaceFlushed, faGauge, faHorse, faHorseHead, faStar, faTag, faWallet, } from '@fortawesome/free-solid-svg-icons'

export default function Item() {
    // styles
    const [hovered, changeHovered] = useState('');
    const [selectedItem, setSelectedItem] = useState({
        id: 1,
        name: 'IronWrist Bracelet (Pack of 5)',
        quantity: 1,
        price: 15,
        oldPrice: 15,
        reviews: [
          [
            {
              name: 'Dato Kinkidze',
              review: 'This is the best review ever1',
              stars: 5,
              date: '02/07/2023' 
            },
            {
              name: 'Tato Kinkidze',
              review: 'This is the best review ever2',
              stars: 4,
              date: '06/11/2023' 
            },
            {
              name: 'Bato Kinkidze',
              review: 'This is the best review ever1',
              stars: 5,
              date: '02/02/2024' 
            },
          ],
          [
            {
              name: 'Sato Kinkidze',
              review: `This is the best review ever2 \n\n 
              This is the best review ever2 This is the best review ever2 This is the best review ever2`,
              stars: 4,
              date: '06/01/2024' 
            },
            {
              name: 'Sato Kinkidze',
              review: `This is the best review ever2 \n\n 
              This is the best review ever2 This is the best review ever2 This is the best review ever2`,
              stars: 4,
              date: '06/01/2024' 
            },
            {
              name: 'oato Kinkidze',
              review: 'This is the best review ever1',
              stars: 5,
              date: '02/02/2024' 
            },
          ],
          [
            {
              name: 'Dato Kinkidze',
              review: 'This is the best review ever1',
              stars: 5,
              date: '02/07/2023' 
            },
            {
              name: 'Tato Kinkidze',
              review: 'This is the best review ever2',
              stars: 4,
              date: '06/11/2023' 
            },
            {
              name: 'Bato Kinkidze',
              review: 'This is the best review ever1',
              stars: 5,
              date: '02/02/2024' 
            },
          ],
        ],
        reviewCount: 12,
        description: 
        `The best description
        second line
        third line`,
        rating: 4.7,
        selectedSize: 'Medium',
        vipOffer: true,
        sizes: ['Small', 'Medium', 'Large'],
        vipOfferPrice: 0.99,
        variations: [
          '/src/assets/irownbracelet.png',
          '/src/assets/ironwrist2.png'
        ],
        selectedVariation: '/src/assets/irownbracelet.png',
      });

    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: 'auto',
      });
      selectVariation(selectedItem['variations'][0])
    }, [])

    const selectVariation = (variation: string) => {
        setSelectedItem((prevState: any) => ({
            ...prevState,
            selectedVariation: variation
        }))
    }

    // styles
    const hoverOver = (i: any) => {
      changeHovered(i)
    }

    const hoverOut = () => {
      changeHovered('')
    }

    const zoomIn = (event: any) => {
      const img = event.target;
      const rect = img.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const offsetX = (x / rect.width) * 100;
      const offsetY = (y / rect.height) * 100;
      img.style.transformOrigin = `${offsetX}% ${offsetY}%`;
      img.classList.add('zoomed');
    }

    const zoomOut = (event: any) => {
      const img = event.target;
      img.classList.remove('zoomed')
    }


  return (
    <>
        <main className="twelve">
            <section className="left">
                <div className="big-image-wrap">
                    <div className="image-wrap">
                        <img
                        className="big-image"
                        onMouseMove={zoomIn}
                        onMouseOut={zoomOut}
                        src={hovered || selectedItem['selectedVariation']}
                        alt="No image"
                        />
                    </div>
                </div>
                <div className="small-images">
                    {selectedItem['variations']?.map((item: string, i: number) => (
                        <div
                            key={i} 
                            className={`small-image-wrap ${selectedItem['selectedVariation'] === item ? 'selected' : ''}`}
                            onClick={() => selectVariation(item)}
                            onMouseOver={() => hoverOver(item)}
                            onMouseOut={hoverOut}
                        >
                            <img src={item} alt="No image"/>
                        </div>
                    ))}
                </div>
            </section>

            <section className="right">
                <div className="seller-profile">
                  <div className="seller-img-wrap">
                    <img className="seller-img" src="/src/assets/irownbracelet.png"/>
                  </div>
                  <div className="seller-name-wrap">
                    <span className="seller-name">Dato</span>
                    <span className="listing-count">35 Listings</span>
                  </div>
                </div>

                <h1 className="title">{selectedItem['name']}</h1>
                
                <div className="price-wrap">
                  <h1 className="price">${selectedItem['vipOfferPrice']?.toFixed(2)} USD</h1>
                </div>

                <table className="car-details">
                  <tbody>
                    <tr className="car-detail">
                      <td><FontAwesomeIcon className="detail-p detail-text" icon={faWallet}></FontAwesomeIcon></td>
                      <td><span className="detail-v detail-text">Price</span></td>
                    </tr>
                    <tr className="car-detail">
                      <td><FontAwesomeIcon className="detail-p detail-text" icon={faTag}></FontAwesomeIcon></td>
                      <td><span className="detail-v detail-text">Brand</span></td>
                    </tr>
                    <tr className="car-detail">
                      <td><FontAwesomeIcon className="detail-p detail-text" icon={faGauge}></FontAwesomeIcon></td>
                      <td><span className="detail-v detail-text">Milage</span></td>
                    </tr>
                    <tr className="car-detail">
                      <td><FontAwesomeIcon className="detail-p detail-text" icon={faCar}></FontAwesomeIcon></td>
                      <td><span className="detail-v detail-text">Model</span></td>
                    </tr>
                    <tr className="car-detail">
                      <td><FontAwesomeIcon className="detail-p detail-text" icon={faCalendar}></FontAwesomeIcon></td>
                      <td><span className="detail-v detail-text">Year</span></td>
                    </tr>
                    <tr className="car-detail">
                      <td><FontAwesomeIcon className="detail-p detail-text" icon={faHorseHead}></FontAwesomeIcon></td>
                      <td><span className="detail-v detail-text">HP</span></td>
                    </tr>
                  </tbody>
                </table>

                <div className="offers">
                    <span className="offer-text">
                        {selectedItem['description']}
                    </span>
                </div>

                <button className="message-button">Message</button>

            </section>
        </main>
    </>
  )
}