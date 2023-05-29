import { useState } from "react";
import { IImage } from "../utils/interfaces";

import "./Slider.scss";

interface ISliderProps {
  images: IImage[];
}
const Slider = ({ images }: ISliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider">
      <img className="slide" src={images?.[currentIndex]?.url} alt="Slider" />
      <button className="prev-btn" onClick={prevSlide}>
        Prev
      </button>
      <button className="next-btn" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default Slider;
