import './carousel.css'
import { useEffect } from 'react';
export default function Carousel(props: any) {
  useEffect(() => {
    // Prevent pinch-to-zoom on touch devices
    const preventPinchZoom = (event: any) => {
      event.preventDefault();
    };

    document.addEventListener('touchmove', preventPinchZoom, { passive: false });

    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener('touchmove', preventPinchZoom);
    };
  }, []);
  const zoomIn = (event: any) => {
    event.preventDefault();
    if(props?.animating){
      return
    }
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
