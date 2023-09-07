import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Card() {

    const [items, setItems] = useState([
        {
            id: 1,
            price: '',
            milage: '',
            make: "",
            model: "",
            year: '',
            animation: "slidLeft",
            hp: '',
            name: "",
            description: `The best desc`,
            images: ["/src/assets/irownbracelet.png", "/src/assets/ironwrist2.png"],
            selectedImage: "/src/assets/irownbracelet.png",
        },
        {
            id: 2,
            price: 30,
            milage: '',
            make: "",
            model: "",
            year: '',
            animation: "slidLeft",
            hp: '',
            name: "",
            description: `The best desc`,
            images: ["/src/assets/ironwrist2.png", "/src/assets/irownbracelet.png"],
            selectedImage: "/src/assets/irownbracelet.png",
          }
    ])
  return (
    <>
        <ul>
            {items.map((item: any) => (
                <li>
                    <Link to="/home" />
                    <section>
                        <div className="item-img-wrap">
                            <img className="item-img" src={item?.images[0] || ''} /> 
                        </div>
                        <div className="bottom-wrap">
                            <div className="span-wrap">
                                <span className="name">{item?.name}</span>
                                <span className="price">${item.price.toFixed(2)}</span>
                            </div>
                            <div className="shopnow-wrap">
                                <h5 className="shopnow">SHOP NOW</h5>
                            </div>
                        </div>
                    </section>
                </li>
            ))}
        </ul>
    </>
  )
}
