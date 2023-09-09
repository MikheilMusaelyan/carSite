import './carousel.css'
import { useEffect, useRef } from 'react';
export default function Carousel(props: any) {
  const myImage = useRef(null)
  useEffect(() => {
    document.addEventListener('touchmove', preventPinchZoom, { passive: false });
    return () => {
      document.removeEventListener('touchmove', preventPinchZoom);
    };
  }, []);

  function preventPinchZoom(event: any){
    if(event.target.tagName == 'IMG'){
      event.preventDefault()
    }
  }

  const zoomIn = (event: any) => {
    if (props?.animating) {
      return;
    }
    const img = event.target;
    const rect = img.getBoundingClientRect();
    const touch = event?.touches?.length ? event?.touches[0] : null ;
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
                ref={myImage}
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
