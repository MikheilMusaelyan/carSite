import "./item.css";
import { useState, useEffect } from "react";
// import { ItemShape } from "./item-shape";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCar,
  faGauge,
  faHorseHead,
  faTag,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

export default function Item() {
  // styles
  const [hovered, changeHovered] = useState("");
  const [selectedItem, setSelectedItem] = useState({
    id: 1,
    price: 15,
    milage: 0,
    make: "",
    model: "",
    year: 0,
    animationType: "",
    horsepower: 0,
    name: "d",
    quantity: 1,
    description: `The best description
      second line
      third line`,
    images: ["/src/assets/irownbracelet.png", "/src/assets/ironwrist2.png"],
    selectedImage: "/src/assets/irownbracelet.png",
  });
  const [editing, setEditing] = useState(true);




  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
    selectImage(selectedItem["images"][0]);
    // setTimeout(() => {
    //   setEditing(true)
    // }, 2000);
  }, []);

  const selectImage = (variation: string) => {
    setSelectedItem((prevState: any) => ({
      ...prevState,
      selectedImage: variation,
    }));
  };

  function handleInputChange(event: any) {
    const { name, value } = event.target;
    setSelectedItem((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }
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

          <div className="title-wrap">
            {(!editing || editing && true) && <h1 className="title">{selectedItem["name"]}</h1>}
            {editing && 
            <input
            className="title-input detail-input" 
            placeholder="Title"
            name="name"
            onChange={handleInputChange}
            ></input>}
          </div>

          <div className="price-wrap">
            {!editing && <h1 className="price">${selectedItem["price"]?.toFixed(2)} USD</h1>}
            {editing && <input min={1} className="price-input detail-input" type="number" placeholder="Price" />}
          </div>

          <table className="car-details">
            <tbody>
              <tr className="car-detail">
                <td style={{ color: "green" }}>
                  <FontAwesomeIcon
                    className="detail-p"
                    icon={faTag}
                  ></FontAwesomeIcon>
                </td>
                <td>
                  {!editing && <span className="detail-v">Brand</span>}
                  {editing && <input
                    style={{ outlineColor: 'green' }}
                    type="text"
                    className="detail-input"
                    placeholder="Brand"
                  />}
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
                  {!editing && <span className="detail-v">Milage</span>}
                  {editing && <input
                    type="text"
                    className="detail-input"
                    placeholder="Milage"
                  />}
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
                  {!editing && <span className="detail-v">Model</span>}
                  {editing && <input
                    type="text"
                    className="detail-input"
                    placeholder="Model"
                  />}
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
                  {!editing && <span className="detail-v">Year</span>}
                  {editing && <input
                    type="text"
                    className="detail-input"
                    placeholder="Year"
                  />}
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
                  {!editing && <span className="detail-v">HP</span>}
                  {editing && <input
                    type="text"
                    className="detail-input"
                    placeholder="Horse power"
                  />}
                </td>
              </tr>
            </tbody>
          </table>

          <div className="description-wrap">
            {!editing && <span className="description">{selectedItem["description"]}</span>}
            {editing && 
              <textarea className="description-textarea detail-input" placeholder="Description (optional)">

              </textarea>
            }
          </div>

          <button className="message-button">Message</button>
        </section>
      </main>
    </>
  );
}
