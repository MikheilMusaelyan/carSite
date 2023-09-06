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
import { checkInput } from "../shared";

export default function Item() {
  // styles
  const carDetailsRef = useRef(null)
  const [hovered, changeHovered] = useState("");
  const [selectedItem, setSelectedItem] = useState({
    id: 1,
    price: '',
    milage: '',
    make: "",
    model: "",
    year: '',
    animationType: "",
    hp: '',
    name: "",
    desc: `The best description
      second line
      third line`,
    images: ["/src/assets/irownbracelet.png", "/src/assets/ironwrist2.png"],
    selectedImage: "/src/assets/irownbracelet.png",
  });
  const [editing, setEditing] = useState(true);
  const [editingProp, setEditingProp] = useState(null)
  const propertyArr = [
    {
      name: 'milage',
      color: 'green',
      placeholder: 'Milage',
      icon: faCar
    },
    {
      name: 'make',
      color: 'red',
      placeholder: 'Make',
      icon: faCar
    },
    {
      name: 'model',
      color: 'pink',
      placeholder: 'Model',
      icon: faTag
    },
    {
      name: 'year',
      color: 'blue',
      placeholder: 'Year',
      icon: faCalendar
    },
    {
      name: 'hp',
      color: 'brown',
      placeholder: 'Horse Power',
      icon: faHorseHead
    },
  ]
  const [scrolledToProps, setScrolledToProps] = useState(false)
  const [animation, setAnimation] = useState('')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    selectImage(selectedItem["images"][0]);
    setAnimation('slidLeft')
    setTimeout(() => {
      setAnimation('')
    }, 300);
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('scroll', handleScroll);
    // clear
    return () => { 
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [])

  function handleScroll(){
    const elementRect: any = carDetailsRef.current.getBoundingClientRect();
    if (elementRect['top'] <= 500) {
      setScrolledToProps(true)
    }
  }

  function handleClickOutside(event: any) {
    if(!editing || event.target.hasAttribute('data-name')) return
    setEditingProp('')
    if(event.target && event.target.tagName === 'INPUT'){
      setEditingProp(event.target.name)      
    }
  }

  function renderProperty(refName: string){
    return !editing || (editing && (editingProp != refName && checkInput(selectedItem[refName])))
  }

  function renderInput(refName: string){
    return ((editing && (!checkInput(selectedItem[refName]) || editingProp == refName)))
  }

  // on input change we also change values depending on their names
  function handleInputChange(event: any) {
    const { name, value } = event.target;
    setSelectedItem((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function selectInput(name: string){
    setEditingProp(name)
  }

  function message() {
    // if(editing) return
    setAnimation('slidLeft')
    setTimeout(() => {
      setAnimation('')
    }, 500);
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
            {renderProperty('name') && 
            <h1
            data-name='property'
            onClick={() => selectInput('name')} 
            className="title"
            >{selectedItem["name"]}</h1>}

            {renderInput('name') && 
            <input
            value={selectedItem['name']}
            onChange={handleInputChange}
            className="title-input detail-input" 
            placeholder="Title"
            name="name"
            />}
          </div>

          <div className="price-wrap">
            {renderProperty('price') && 
              <h1
              data-name='property'
              onClick={() => selectInput('price')} 
              className="price"
              >{selectedItem["price"]}</h1>}

              {renderInput('price') && 
              <input
              value={selectedItem['price']}
              onChange={handleInputChange}
              className="price-input detail-input" 
              placeholder="Price"
              name="price"
              />}
          </div>

          <table className="car-details" ref={carDetailsRef}>
            <tbody>
              {propertyArr.map((prop: any, i: number) => {
                let style = {};

                if (animation == 'slidLeft') {
                  style = {
                    transform: 'translateX(50px)',
                    opacity: 0
                  };
                } else if (animation == 'slidBottom') {
                  style = {
                    transform: 'translateY(50px)',
                    opacity: 0
                  };
                } else if (animation == 'appear') {
                  style = {
                    opacity: 0
                  };
                } else if (animation == '' && scrolledToProps) {
                  style = { 
                    transition: `550ms ${i * 90}ms`,
                    opacity: 1,
                    transform: 'translate(0, 0)'
                  };
                }

                return (
                <tr 
                  key={i} 
                  style={style} 
                  className="car-detail"
                >
                  <td style={{ color: prop['color'] }}>
                    <FontAwesomeIcon
                      className="detail-p"
                      icon={prop['icon']}
                    ></FontAwesomeIcon>
                  </td>
                  <td>
                    {renderProperty(prop['name']) && 
                    <span 
                    className="detail-v"
                    data-name='property'
                    onClick={() => selectInput(prop['name'])}
                    >
                      {selectedItem[prop['name']]}
                    </span>
                    }
                    {renderInput(prop['name']) && 
                    <input
                    style={{color: prop['color']}}
                    value={selectedItem[prop['name']]}
                    onChange={handleInputChange}
                    className={`${prop['name']}-input detail-input` }
                    placeholder={prop['placeholder']}
                    name={prop['name']}
                    />}
                  </td>
                </tr>
                )
              })}
              
            </tbody>
          </table>

          {/* <div className="description-wrap">
            {!editing && <span className="description">{selectedItem["desc"]}</span>}
            {editing && 
              <textarea 
              className="description-textarea detail-input" 
              placeholder="Description (optional)"
              ref={inputRefs.desc.value}
              onChange={handleInputChange}
              name="desc"
              value={selectedItem['desc']}
              >
                
              </textarea>
            }
          </div> */}

          <button 
          onClick={message} 
          className={`message-button ${editing ? 'unhoverable-button' : ''}`}
          >Message</button>
        </section>
      </main>
    </>
  );
}
