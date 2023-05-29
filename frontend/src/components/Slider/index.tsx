import { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { RxDot, RxDotFilled } from "react-icons/rx";

import { IImage } from "../../utils/interfaces";

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
    <div className="slider-wrapper">
      <div className="slider">
        <img
          className="slide"
          src={images?.[currentIndex]?.url}
          alt="Slider"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src =
              "https://via.placeholder.com/600x600?text=Missed%20image";
          }}
        />

        <GrNext className="next-btn" onClick={nextSlide}></GrNext>
        <GrPrevious className="prev-btn" onClick={prevSlide}></GrPrevious>
      </div>
      <div className="slider-dots">
        {images?.map((item, index) =>
          index === currentIndex ? (
            <RxDotFilled
              className="slider-dots-selected"
              onClick={() => setCurrentIndex(index)}
            />
          ) : (
            <RxDot onClick={() => setCurrentIndex(index)} />
          )
        )}
      </div>
    </div>
  );
};

export default Slider;
