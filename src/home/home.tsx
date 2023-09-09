import { useState, useEffect } from "react";
import Card from "./card/card";
import "./home.css";
import Landingpage from "./landingpage/landingpage";

export default function Home() {
  const [items, setItems] = useState([
    {
      id: 1,
      price: 10,
      mileage: "",
      make: "",
      model: "",
      year: "",
      animation: "slidLeft",
      hp: "",
      name: "no nae",
      description: `The best desc`,
      images: ["/src/assets/irownbracelet.png", "/src/assets/ironwrist2.png"],
      selectedImage: "/src/assets/irownbracelet.png",
    },
    {
      id: 2,
      price: 30,
      mileage: "",
      make: "",
      model: "",
      year: "",
      animation: "slidLeft",
      hp: "",
      name: "123",
      description: `The best desc`,
      images: ["/src/assets/ironwrist2.png", "/src/assets/irownbracelet.png"],
      selectedImage: "/src/assets/irownbracelet.png",
    },
  ]);
  useEffect(() => {
    setItems([
      {
        id: 1,
        price: 10,
        mileage: "",
        make: "",
        model: "",
        year: "",
        animation: "slidLeft",
        hp: "",
        name: "no nae",
        description: `The best desc`,
        images: ["/src/assets/irownbracelet.png", "/src/assets/ironwrist2.png"],
        selectedImage: "/src/assets/irownbracelet.png",
      },
      {
        id: 2,
        price: 30,
        mileage: "",
        make: "",
        model: "",
        year: "",
        animation: "slidLeft",
        hp: "",
        name: "123",
        description: `The best desc`,
        images: ["/src/assets/ironwrist2.png", "/src/assets/irownbracelet.png"],
        selectedImage: "/src/assets/irownbracelet.png",
      },
    ]);
  }, []);
  return (
    <>
      <Landingpage />
      <h1 className="recent-listings">Recent Listings</h1>
      <ul className="ul">
        {items.map((item: any) => (
          <Card item={item} key={item.id} />
        ))}
      </ul>
    </>
  );
}
