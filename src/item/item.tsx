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
} from "@fortawesome/free-solid-svg-icons";
import { checkInput } from "../shared";
import Carousel from "../carousel/carousel";

export default function Item() {
  // styles
  const carDetailsRef = useRef(null)
  const [selectedItem, setSelectedItem] = useState({
    id: 1,
    price: '',
    milage: '',
    make: "",
    model: "",
    year: '',
    animation: "slidLeft",
    hp: '',
    name: "",
    description: `The best description
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
      icon: faGauge
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
  const [animation, setAnimation] = useState('')
  const [animationHappened, setAnimationHappened] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });

    document.addEventListener('click', handleClickOutside);
    handleScroll()
    // clear
    return () => { 
      document.removeEventListener('click', handleClickOutside);
    };
  }, [])
  

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [selectedItem])

  function handleScroll(){
    const elementRect: any = carDetailsRef.current.getBoundingClientRect();
    if (elementRect['top'] <= 500) {
      setAnimationHappened(true)
      return setAnimation('')
    }
    setAnimation(selectedItem['animation'])
  }

  function handleClickOutside(event: any) {
    if(!editing || event.target.hasAttribute('data-name')) return
    setEditingProp('')
    if(event.target && (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA')){
      setEditingProp(event.target.name)      
    }
  }

  function changeAnimation(string: string) {
    setSelectedItem((prev: any) => ({
      ...prev,
      animation: string
    }))
    setAnimation(string)
    const elementRect: any = carDetailsRef.current.getBoundingClientRect();
    if (elementRect['top'] <= 500) {
      setTimeout(() => {
        setAnimation('')
      }, 300);
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
    if(editing) return
  }

  // styles
  const animtaionPreference = (i: number) => {
    if (animation == 'slidLeft') {
      return {
        transform: 'translateX(50px)',
        opacity: 0
      };
    } else if (animation == 'appear') {
      return {
        opacity: 0
      };
    } else if (animation == '' ) {
      return { 
        transition: `550ms ${i * 90}ms`,
        opacity: 1,
        transform: 'translate(0, 0)'
      };
    }
  }

  

  

  return (
    <>
      <main className="twelve">
        {/* animations */}

        <section className="left">
          <div className="big-image-wrap">
            <Carousel images={selectedItem['images']} />
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

          {/* properties */}
          <table className="car-details" ref={carDetailsRef}>
            <tbody>
              {propertyArr.map((prop: any, i: number) => {
                let style = animtaionPreference(i)

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

          {/* textare */}
          <div className="description-wrap">
            {renderProperty('description') && 
            <span 
            data-name='property'
            onClick={() => selectInput('description')} 
            className="description"
            >{selectedItem["description"]}</span>}

            {renderInput('description') && 
            <textarea 
            className="description-textarea detail-input" 
            placeholder="Description (optional)"
            onChange={handleInputChange}
            name="description"
            value={selectedItem['description']}
            >
            </textarea>
            }
          </div>

          <button 
          onClick={message} 
          className={`message-button ${editing ? 'unhoverable-button' : ''}`}
          >Message</button>
        </section>
      </main>
      <div className="select-anim-wrap-main">
        <div className="select-anim-wrap-fixed">
          <div className="select-anim-wrap">
            <h2 className="select-anim-text">Select an animation</h2>
              <div className="button-wrap">
                <button onClick={() => changeAnimation('slidLeft')} className={`select-anim ${selectedItem['animation'] === 'slidLeft' ? 'active' : ''}`}>I</button>
                <button onClick={() => changeAnimation('appear')} className={`select-anim ${selectedItem['animation'] === 'appear' ? 'active' : ''}`}>II</button>
                <button onClick={() => changeAnimation('none')} className={`select-anim ${selectedItem['animation'] === 'none' ? 'active' : ''}`}>None</button>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}
