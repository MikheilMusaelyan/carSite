import "./item.css";
import { useState, useEffect, useRef } from "react";
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
    description: `The best description
      second line
      third line`,
    images: ["/src/assets/irownbracelet.png", "/src/assets/ironwrist2.png"],
    selectedImage: "/src/assets/irownbracelet.png",
  });
  const [editing, setEditing] = useState(true);

  // refs
  const inputRefs = {
    nameRef: {
      value: useRef(),
      selected: false
    },
    priceRef: {
      value: useRef(),
      selected: false
    },
    brandRef: {
      value: useRef(),
      selected: false
    },
    milageRef: {
      value: useRef(),
      selected: false
    },
    modelRef: {
      value: useRef(),
      selected: false
    },
    yearRef: {
      value: useRef(),
      selected: false
    },
    descRef: {
      value: useRef(),
      selected: false
    },
    hpRef: {
      value: useRef(),
      selected: false
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    selectImage(selectedItem["images"][0]);
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    // clear
    return () => { 
      document.removeEventListener('click', handleClickOutside);
    };
  }, [])

  // changing selected field
  function handleClickOutside(event: any) {
    if(!editing) return
    for (const inputName in inputRefs) {
      inputRefs[inputName]['selected'] = false;
      if (inputRefs[inputName]['value'].current && inputRefs[inputName]['value'].current.contains(event.target)) {
        inputRefs[inputName]['selected'] = true;
      }     
    }
  }

  function renderProperty(refName: string){
    return !editing || (editing && (!inputRefs[refName].selected && inputRefs[refName].value['length'] > 0))
  }

  function renderInput(refName: string){
    return ((editing && (inputRefs[refName].selected || inputRefs[refName].value['length'] == 0)))
  }

  // on input change we also change values depending on their names
  function handleInputChange(event: any) {
    const { name, value } = event.target;
    setSelectedItem((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }
  // styles
  const selectImage = (variation: string) => {
    setSelectedItem((prevState: any) => ({
      ...prevState,
      selectedImage: variation,
    }));
  };

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
            {true && <h1 className="title">{selectedItem["name"]}</h1>}
            {true && 
            <input
            ref={inputRefs.nameRef.value}
            onChange={handleInputChange}
            className="title-input detail-input" 
            placeholder="Title"
            name="name"
            />}
          </div>

          <div className="price-wrap">
            {!editing && <h1 className="price">${selectedItem["price"]?.toFixed(2)} USD</h1>}
            {editing && 
            <input 
            ref={inputRefs.priceRef.value}
            onChange={handleInputChange}
            min={1} 
            className="price-input detail-input" 
            type="number" 
            placeholder="Price"
            />}
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
                    ref={inputRefs.brandRef.value}
                    onChange={handleInputChange} 
                    style={{ outlineColor: 'green' }}
                    type="text"
                    className="brand-input detail-input"
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
                    ref={inputRefs.milageRef.value}
                    onChange={handleInputChange} 
                    type="text"
                    className="milage=input detail-input"
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
                    ref={inputRefs.modelRef.value}
                    onChange={handleInputChange} 
                    type="text"
                    className="model-input detail-input"
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
                    ref={inputRefs.yearRef.value}
                    onChange={handleInputChange} 
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
                    ref={inputRefs.hpRef.value}
                    onChange={handleInputChange}
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
              <textarea 
              className="description-textarea detail-input" 
              placeholder="Description (optional)"
              ref={inputRefs.descRef.value}
              onChange={handleInputChange}
              >

              </textarea>
            }
          </div>

          <button className="message-button">Message</button>
        </section>
      </main>
    </>
  );
}
