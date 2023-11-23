import { useState, useEffect } from "react"
import leftChevron from "../../assets/left-arrow.svg"
import rightChevron from "../../assets/right-arrow.svg"
import "./Slider.css"
import sliderData from "../../data/sliderData"

export default function Slider() {
  const [sliderIndex, setSliderIndex] = useState(1)

  function toggleImage(indexPayload) {
  

    setSliderIndex(state => {
      if (indexPayload + state > sliderData.length) {
        return 1
      } else if (indexPayload + state < 1) {
        return sliderData.length
      } else {
        return state + indexPayload
      }
    })
  }

  useEffect(() => {
   

    return () => clearInterval(intervalID)
  }, [])

  return (
    <>
      <p className="index-info">
        {sliderIndex} / {sliderData.length}
      </p>
      <div className="slider">
        <p className="image-info">
          {sliderData.find(obj => obj.id === sliderIndex).description}
        </p>
        <img
          src={`/images/img-${sliderIndex}.jpg`}
          alt="estate's rooms"
          className="slider-img"
        />

        <button
          onClick={() => toggleImage(-1)}
          className="navigation-button prev-button"
        >
          <img src={leftChevron} alt="previous image" />
        </button>
        <button
          onClick={() => toggleImage(1)}
          className="navigation-button next-button"
        >
          <img src={rightChevron} alt="next image" />
        </button>
      </div>
    </>
  )
}
