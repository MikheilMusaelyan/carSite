import { useState, useEffect } from "react";
import Card from "./card/card";
import "./home.css";
import Landingpage from "./landingpage/landingpage";

export default function Home() {
  const [items, setItems] = useState([
    {
      id: 1,
      price: 12,
      mileage: "",
      make: "",
      model: "",
      year: "",
      animation: "slidLeft",
      hp: "",
      name: "Honda",
      description: ``,
      images: [
        "https://i.insider.com/5f3fec4c42f43f001ddfe52f?width=700",
        "https://vehicle-images.dealerinspire.com/b519-11001857/2HGFE4F86SH324098/779f4ca8fdc3f0e96a38a4daeba78a53.jpg",
        "https://www.heraldnet.com/wp-content/uploads/2019/10/18935367_web1_M3-Cars-edh-191014-1024x682.jpg"
      ],
      selectedImage: "https://i.insider.com/5f3fec4c42f43f001ddfe52f?width=700",
    }
  ]);
  useEffect(() => {
    setItems([
      {
        id: 1,
      price: 12,
      mileage: "",
      make: "",
      model: "",
      year: "",
      animation: "slidLeft",
      hp: "",
      name: "Honda",
      description: ``,
      images: [
        "https://i.insider.com/5f3fec4c42f43f001ddfe52f?width=700",
        "https://vehicle-images.dealerinspire.com/b519-11001857/2HGFE4F86SH324098/779f4ca8fdc3f0e96a38a4daeba78a53.jpg",
        "https://www.heraldnet.com/wp-content/uploads/2019/10/18935367_web1_M3-Cars-edh-191014-1024x682.jpg"
      ],
      selectedImage: "https://i.insider.com/5f3fec4c42f43f001ddfe52f?width=700",
      }
    ]);
  }, []);
  return (
    <>
      <Landingpage />
      <h1 className="recent-listings">Recent Listings</h1>
      <ul className="ul">
        {items.map((item: any) => (
          <Card item={item} removeCard={() => false} editCard={() => false} key={item.id} />
        ))}
      </ul>
    </>
  );
}
