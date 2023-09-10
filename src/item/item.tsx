import "./item.css";
import { useState, useEffect, useRef } from "react";
// import { ItemShape } from "./item-shape";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCar,
  faGauge,
  faHorseHead,
  faMessage,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import {
  animtaionPreference,
  animtaionPreferenceFromTop,
  animtaionPreferenceImage,
  checkInput,
} from "../shared/shared";
import Carousel from "../carousel/carousel";
import CharacterLimit from "../shared/characterlimit";
import AddImage from "./AddImage/AddImage";
// import { useParams } from "react-router-dom";

export default function Item() {
  // styles
  const carDetailsRef = useRef();
  const [selectedItem, setSelectedItem] = useState({
    id: 1,
    price: "",
    mileage: "",
    make: "",
    model: "",
    year: "",
    animation: "slidLeft",
    hp: "",
    name: "",
    description: `The best desc`,
    images: [
      "https://miro.medium.com/max/3840/1*xMuIOwjliGUPjkzukeWKfw.jpeg",
      "https://miro.medium.com/max/3840/1*xMuIOwjliGUPjkzukeWKfw.jpeg",
      "/src/assets/ironwrist2.png",
    ],
    selectedImage: "/src/assets/irownbracelet.png",
  });
  const [editing, setEditing] = useState(true);
  const [editingProp, setEditingProp] = useState(null);
  const propertyArr = [
    {
      name: "mileage",
      color: "#4CAF50", // Green
      placeholder: "Mileage",
      icon: faGauge,
    },
    {
      name: "make",
      color: "#E91E63", // Pink
      placeholder: "Make",
      icon: faCar,
    },
    {
      name: "model",
      color: "#2196F3", // Blue
      placeholder: "Model",
      icon: faTag,
    },
    {
      name: "year",
      color: "#FF5722", // Orange
      placeholder: "Year",
      icon: faCalendar,
    },
    {
      name: "hp",
      color: "#795548", // Brown
      placeholder: "Horse Power",
      icon: faHorseHead,
    },
  ];
  const [animating, setAnimating] = useState(true);
  const [animFound, setAnimFound] = useState(false);
  // let { id } = useParams();

  // anims
  const [animation, setAnimation] = useState("");

  useEffect(() => {
    getItemData();
    if (selectedItem["animation"] !== "") {
      setTimeout(() => {
        setAnimFound(true);
        changeAnimation(selectedItem["animation"], false);
      }, 500);
    }

    // auto scroll
    window.scrollTo({ top: 0, behavior: "auto" });

    // click
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  function getItemData() {
    setEditing(true);
  }

  function handleClickOutside(event: any) {
    if (!editing || event.target.hasAttribute("data-name")) return;
    setEditingProp("");
    if (
      event.target &&
      (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA")
    ) {
      setEditingProp(event.target.name);
    }
  }

  function changeAnimation(string: string, changing: boolean = true) {
    if (changing) {
      setSelectedItem((prev: any) => ({
        ...prev,
        animation: string,
      }));
    }
    setAnimation(string);
    if (string == "") {
      return setAnimating(false);
    }
    setAnimating(true);
    setTimeout(() => {
      setTimeout(() => {
        setAnimating(false);
      }, 1400);
      setAnimation("");
    }, 300);
  }

  function renderProperty(refName: string) {
    return (
      !editing ||
      (editing && editingProp != refName && checkInput(selectedItem[refName]))
    );
  }

  function renderInput(refName: string) {
    return (
      editing && (!checkInput(selectedItem[refName]) || editingProp == refName)
    );
  }

  // on input change we also change values depending on their names
  function handleInputChange(event: any) {
    const { name, value } = event.target;
    const val = parseFloat(value)
    if ((name == "price" || name == "mileage" || name == "year" || name == "hp") && isNaN(val)) {
      return;
    }
    setSelectedItem((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function selectInput(name: string) {
    setEditingProp(name);
  }

  function message() {
    if (editing) return;
  }

  const handleChildImageChange = (childImages: any) => {
    setSelectedItem((prev: any) => ({
      ...prev,
      images: childImages
    }));
    console.log(selectedItem['images'])
  };

  // styles
  return (
    <>
      <main className="twelve">
        {/* animations */}
        <section className="left">
          {
            (selectedItem['images'].length != 0) &&
            <div
              className="big-image-wrap"
              style={animtaionPreferenceImage(animation, 500, animFound)}
            >
              <Carousel images={selectedItem["images"]} animating={animating} />
            </div>
          }
          {
            editing && animating == false &&
            <AddImage onImageChange={handleChildImageChange} />
          }
        </section>

        <section className="right">
          {/* profile */}
          <div
            className="seller-profile"
            style={
              {
                ...animtaionPreferenceFromTop(animation, 200, animFound),
                'cursor': editing ? 'not-allowed' : 'pointer'
              }
            }
          >
            <div className="seller-img-wrap">
              <img className="seller-img" src="/src/assets/irownbracelet.png" />
            </div>
            <div className="seller-name-wrap">
              <span className="seller-name">Dato</span>
              <span className="listing-count">35 Listings</span>
            </div>
          </div>

          {/* title */}
          <div
            className="title-wrap"
            style={
              editing
                ? {
                    cursor: "pointer",
                    ...animtaionPreferenceFromTop(animation, 350, animFound),
                  }
                : animtaionPreferenceFromTop(animation, 350, animFound)
            }
          >
            {renderProperty("name") && (
              <h1
                data-name="property"
                onClick={() => selectInput("name")}
                className="title"
              >
                <CharacterLimit text={selectedItem["name"]} limit={50} />
              </h1>
            )}

            {renderInput("name") && (
              <input
                value={selectedItem["name"]}
                onChange={handleInputChange}
                className="title-input detail-input"
                placeholder="Title"
                name="name"
                maxLength={50}
              />
            )}
          </div>

          {/* price */}
          <div
            className="price-wrap"
            style={
              editing
                ? {
                    cursor: "pointer",
                    ...animtaionPreferenceFromTop(
                      animation,
                      350,
                      animFound,
                      1000
                    ),
                  }
                : animtaionPreferenceFromTop(animation, 350, animFound, 1000)
            }
          >
            {renderProperty("price") && (
              <h1
                data-name="property"
                onClick={() => selectInput("price")}
                className="price"
              >
                $
                <CharacterLimit text={selectedItem["price"]} limit={10} />
              </h1>
            )}

            {renderInput("price") && (
              <input
                value={selectedItem["price"]}
                onChange={handleInputChange}
                className="price-input detail-input"
                placeholder="Price"
                name="price"
                type="number"
              />
            )}
          </div>

          {/* properties */}
          <table className="car-details" ref={carDetailsRef}>
            <tbody>
              {propertyArr.map((prop: any, i: number) => {
                let style: any = animtaionPreference(i, animation, animFound);

                return (
                  <tr key={i} style={style} className="car-detail">
                    <td style={{ color: prop["color"] }}>
                      <FontAwesomeIcon
                        className="detail-p"
                        icon={prop["icon"]}
                      ></FontAwesomeIcon>
                    </td>
                    <td>
                      {renderProperty(prop["name"]) && (
                        <span
                          style={editing ? { cursor: "pointer" } : {}}
                          className="detail-v"
                          data-name="property"
                          onClick={() => selectInput(prop["name"])}
                        >
                          <CharacterLimit
                            text={selectedItem[prop["name"]]}
                            limit={20}
                          />
                        </span>
                      )}
                      {renderInput(prop["name"]) && (
                        <input
                          maxLength={20}
                          style={{ color: prop["color"] }}
                          value={selectedItem[prop["name"]]}
                          onChange={handleInputChange}
                          className={`${prop["name"]}-input detail-input`}
                          placeholder={prop["placeholder"]}
                          name={prop["name"]}
                        />
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* textarea */}
          <div
            className="description-wrap"
            style={animtaionPreferenceFromTop(animation, 450, animFound, 670)}
          >
            {renderProperty("description") && (
              <span
                data-name="property"
                onClick={() => selectInput("description")}
                className="description"
              >
                <CharacterLimit
                  text={selectedItem["description"]}
                  limit={500}
                />
              </span>
            )}

            {renderInput("description") && (
              <textarea
                className="description-textarea detail-input"
                placeholder="Description (optional)"
                onChange={handleInputChange}
                name="description"
                value={selectedItem["description"]}
                maxLength={500}
              ></textarea>
            )}
          </div>

          {/* message button */}
          <button
            style={animtaionPreferenceImage(animation, 650, animFound, 750)}
            onClick={message}
            className={`message-button ${editing ? "disabled-button" : ""}`}
          >
            <FontAwesomeIcon
              icon={faMessage}
              style={{
                fontSize: "16px",
                paddingRight: "8px",
                transform: "translateY(.5px)",
              }}
            />
            Message
          </button>
        </section>
      </main>

      
      {/* select animations */}
      {(editing && animating == false) && (
        <div className="select-anim-wrap-main">
          <div className="select-anim-wrap-fixed">
            <div className="select-anim-wrap">
              <h2 className="select-anim-text">
                Select an animation
              </h2>
              <div className="button-wrap">
                <button
                  onClick={() => changeAnimation("slidLeft")}
                  className={`select-anim ${
                    selectedItem["animation"] === "slidLeft" ? "active" : ""
                  }`}
                >
                  I
                </button>
                <button
                  onClick={() => changeAnimation("appear")}
                  className={`select-anim ${
                    selectedItem["animation"] === "appear" ? "active" : ""
                  }`}
                >
                  II
                </button>
                <button
                  onClick={() => changeAnimation("")}
                  className={`select-anim ${
                    selectedItem["animation"] === "" ? "active" : ""
                  }`}
                >
                  None
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
