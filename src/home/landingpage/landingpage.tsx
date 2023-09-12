import { useEffect, useRef } from 'react'
import './landingpage.css'
export default function Landingpage() {
    const imageRef = useRef(null)

    useEffect(() => {
        scrollAnim()
    }, [])

    function scrollAnim() {
        let scrollSpeed = -0.1
        window.addEventListener('scroll', () => {
          const scrollPos = window.scrollY * scrollSpeed;
          if(imageRef?.current){
            imageRef.current.style.transform = `translateY(${scrollPos}px)`;
          }
        });
    }

  return (
    <>
        <main className="landing-page main-main">
            <div className="bubble-wrap"></div>
            <div className="bubble right-bubble">
            </div>
            <div className="bubble left-bubble">
                <div className="bubble-before"></div>
            </div>
            <section className="l-text-wrap l-left">
                <div className="l-text">
                    <h1 className="l-h1" ref={imageRef}>
                        Find Your Dream Car
                    </h1>
                    <span className="l-span">
                        Looking for a perfect car for the best price? Trying to sell your vechile? Then this is a perfect place for you!
                    </span>
                </div>
            </section>
            <section className="l-text-wrap l-right" >
                {/* <div className="bubble right-bubble">
                    <div className="bubble-before"></div>
                </div> */}
                <div className="l-image-wrap">
                    <img className="l-image" src="https://i.pinimg.com/originals/1f/59/d7/1f59d759e0217e03a3c442b181229db0.png" />
                </div>
            </section>
        </main>
    </>
  )
}
