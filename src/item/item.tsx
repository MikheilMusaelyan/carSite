import './item.css'
import { useState, useEffect } from "react";
// import { ItemShape } from "./item-shape";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, } from '@fortawesome/free-solid-svg-icons'

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
          {
            variationName: 'Color',
            variationValue: 'Black',
            variationImage: '/src/assets/irownbracelet.png',
            id: 1.1
          },
          {
            variationName: 'Color',
            variationValue: 'Gold',
            variationImage: '/src/assets/ironwrist2.png',
            id: 1.2
          }
        ],
        selectedVariation: {
          variationName: 'Color',
          variationValue: 'Black',
          variationImage: '/src/assets/irownbracelet.png',
          id: 1.1
        },
      });

    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: 'auto',
      });
    }, [])

    const selectVariation = (variation: Variation) => {
        setSelectedItem((prevState: any) => ({
            ...prevState,
            selectedVariation: variation
        }))
    }

    // styles
    const hoverOver = (i: any) => {
      changeHovered(i['variationImage'])
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
                    {/* <div className="image-wrap">
                        <img
                        className="big-image"
                        onMouseMove={zoomIn}
                        onMouseOut={zoomOut}
                        src={hovered || selectedItem['selectedVariation']?.variationImage}
                        alt="No image"
                        />
                    </div> */}

                  <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                      {selectedItem['variations']?.map((item: Variation, i: number) => (
                        <div className="carousel-item active" key={i}>
                          <img src={item['variationImage']} className="d-block w-100"/>
                        </div>
                    ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>

                </div>

                <div className="small-images">
                    {selectedItem['variations']?.map((item: Variation, i: number) => (
                        <div
                            key={i} 
                            className={`small-image-wrap ${selectedItem['selectedVariation']['id'] === item['id'] ? 'selected' : ''}`}
                            onClick={() => selectVariation(item)}
                            onMouseOver={() => hoverOver(item)}
                            onMouseOut={hoverOut}
                        >
                            <img src={item['variationImage']} alt="No image"/>
                        </div>
                    ))}
                </div>
            </section>

            <section className="right">
                <h1 className="title">{selectedItem['name']}</h1>
                
                <div className="price-wrap">
                  <h1 className="price">${selectedItem['vipOfferPrice']?.toFixed(2)} USD</h1>
                </div>
                
                

                <ul className="car-details">
                  <li className="car-detail">
                    <FontAwesomeIcon className="detail-p detail-text" icon={faStar}></FontAwesomeIcon>
                    <span className="detail-v detail-text">Black</span>
                  </li>
                  <li className="car-detail">
                    <FontAwesomeIcon className="detail-p detail-text" icon={faStar}></FontAwesomeIcon>
                    <span className="detail-v detail-text">Black</span>
                  </li>
                </ul>

                <div className="offers">
                    <span className="offer-text">
                        {selectedItem['description']}
                    </span>
                </div>
                <button className="message-button">
                    Message
                </button>   
            </section>
        </main>
    </>
  )
}

export class Variation {
    variationName: string
    variationValue: string;
    variationImage: string;
    id: number
  }