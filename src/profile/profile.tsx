import Card from '../home/card/card';
import './profile.css'
import { useState } from 'react'

export default function Profile(props: any) {
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
  

  return (
    <main className='cart-main main-main'>
      <h1 className="recent-listings">Recent Listings</h1>
      <ul className="ul">
        <Card item={cartItem}/>
      </ul>
    </main>
  );
}