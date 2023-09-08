import './carousel.css'
import { useState, useEffect } from 'react';
export default function Carousel(props: any) {
  const [x, setX] = useState(null)
  const [y, setY] = useState(null)

  useEffect(() => {
    // Prevent pinch-to-zoom on touch devices
    document.addEventListener('touchmove', preventPinchZoom, { passive: false });

    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener('touchmove', preventPinchZoom);
    };
  }, []);

  function preventPinchZoom(event: any){
    event.preventDefault()
  }

  const zoomIn = (event: any) => {
    if (props?.animating) {
      return;
    }
    const img = event.target;
    const rect = img.getBoundingClientRect();
    const touch = event.touches[0];
    const xi = (touch ? touch.clientX : event.clientX) - rect.left;
    const yi = (touch ? touch.clientY : event.clientY) - rect.top;
    img.style.transformOrigin = `${(xi / rect.width) * 100}% ${(yi / rect.height) * 100}%`;
    img.classList.add("zoomed");
  };

  const zoomOut = (event: any) => {
    const img = event.target;
    img.classList.remove("zoomed");
  };

  return (
    <>
    <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          {props.images.map((image: string, index: number) => (
            <div className={`${index == 1 ? 'active': ''} carousel-item`} key={index}>
                <img
                onMouseMove={zoomIn}
                onMouseOut={zoomOut}
                onTouchMove={zoomIn}
                onTouchEnd={zoomOut}
                src={image}
                className="d-block myimage" alt="No Image" />
                
            </div>
          ))}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

    </div>
    </>
  )
}
