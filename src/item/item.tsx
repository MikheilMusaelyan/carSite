import "./item.css";
import { useState, useEffect } from "react";
// import { ItemShape } from "./item-shape";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCar,
  faFaceFlushed,
  faGauge,
  faHorse,
  faHorseHead,
  faStar,
  faTag,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

export default function Item() {
  // styles
  const [hovered, changeHovered] = useState("");
  const [selectedItem, setSelectedItem] = useState({
    id: 1,
    name: "IronWrist Bracelet (Pack of 5)",
    quantity: 1,
    price: 15,
    description: `The best description
      second line
      third line`,
    images: ["/src/assets/irownbracelet.png", "/src/assets/ironwrist2.png"],
    selectedImage: "/src/assets/irownbracelet.png",
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
    selectImage(selectedItem["images"][0]);
  }, []);

  const selectImage = (variation: string) => {
    setSelectedItem((prevState: any) => ({
      ...prevState,
      selectedImage: variation,
    }));
  };

  // styles
  const hoverOver = (i: any) => {
    changeHovered(i);
  };

  const hoverOut = () => {
    changeHovered("");
  };

  const zoomIn = (event: any) => {
    const img = event.target;
    const rect = img.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const offsetX = (x / rect.width) * 100;
    const offsetY = (y / rect.height) * 100;
    img.style.transformOrigin = `${offsetX}% ${offsetY}%`;
    img.classList.add("zoomed");
  };

  const zoomOut = (event: any) => {
    const img = event.target;
    img.classList.remove("zoomed");
  };

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
                src={hovered || selectedItem["selectedImage"]}
                alt="No image"
              />
            </div>
          </div>
          <div className="small-images">
            {selectedItem["images"]?.map((item: string, i: number) => (
              <div
                key={i}
                className={`small-image-wrap ${
                  selectedItem["selectedImage"] === item ? "selected" : ""
                }`}
                onClick={() => selectImage(item)}
                onMouseOver={() => hoverOver(item)}
                onMouseOut={hoverOut}
              >
                <img src={item} alt="No image" />
              </div>
            ))}
          </div>
        </section>

        <section className="right">
          <div className="seller-profile">
            <div className="seller-img-wrap">
              <img className="seller-img" src="/src/assets/irownbracelet.png" />
            </div>
            <div className="seller-name-wrap">
              <span className="seller-name">Dato</span>
              <span className="listing-count">35 Listings</span>
            </div>
          </div>

          <h1 className="title">{selectedItem["name"]}</h1>

          <div className="price-wrap">
            <h1 className="price">${selectedItem["price"]?.toFixed(2)} USD</h1>
          </div>

          <table className="car-details">
            <tbody>
              <tr className="car-detail">
                <td style={{ color: "pink" }}>
                  <FontAwesomeIcon
                    className="detail-p"
                    icon={faWallet}
                  ></FontAwesomeIcon>
                </td>
                <td>
                  <span className="detail-v">Price</span>
                  <input
                    type="text"
                    className="detail-input"
                    placeholder="Price"
                  />
                </td>
              </tr>
              <tr className="car-detail">
                <td style={{ color: "green" }}>
                  <FontAwesomeIcon
                    className="detail-p"
                    icon={faTag}
                  ></FontAwesomeIcon>
                </td>
                <td>
                  <span className="detail-v">Brand</span>
                  <input
                    type="text"
                    className="detail-input"
                    placeholder="Brand"
                  />
                </td>
              </tr>
              <tr className="car-detail">
                <td style={{ color: "red" }}>
                  <FontAwesomeIcon
                    className="detail-p"
                    icon={faGauge}
                  ></FontAwesomeIcon>
                </td>
                <td>
                  <span className="detail-v">Milage</span>
                  <input
                    type="text"
                    className="detail-input"
                    placeholder="Milage"
                  />
                </td>
              </tr>
              <tr className="car-detail">
                <td style={{ color: "orangered" }}>
                  <FontAwesomeIcon
                    className="detail-p"
                    icon={faCar}
                  ></FontAwesomeIcon>
                </td>
                <td>
                  <span className="detail-v">Model</span>
                  <input
                    type="text"
                    className="detail-input"
                    placeholder="Model"
                  />
                </td>
              </tr>
              <tr className="car-detail">
                <td style={{ color: "blue" }}>
                  <FontAwesomeIcon
                    className="detail-p"
                    icon={faCalendar}
                  ></FontAwesomeIcon>
                </td>
                <td>
                  <span className="detail-v">Year</span>
                  <input
                    type="text"
                    className="detail-input"
                    placeholder="Year"
                  />
                </td>
              </tr>
              <tr className="car-detail">
                <td style={{ color: "brown" }}>
                  <FontAwesomeIcon
                    className="detail-p"
                    icon={faHorseHead}
                  ></FontAwesomeIcon>
                </td>
                <td>
                  <span className="detail-v">HP</span>
                  <input
                    type="text"
                    className="detail-input"
                    placeholder="Horse power"
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <div className="offers">
            <span className="offer-text">{selectedItem["description"]}</span>
          </div>

          <button className="message-button">Message</button>
        </section>
      </main>
    </>
  );
}
