import React from "react";
import { IImage } from "../../utils/interfaces";
import "./Gallery.scss";
interface IGalleryProps {
  images: IImage[];
}

const Gallery: React.FC<IGalleryProps> = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div className="gallery-item" key={index}>
          <img
            src={image.url}
            alt={image.title}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src =
                "https://via.placeholder.com/600x600?text=Missed%20image";
            }}
          />
          <p>{image.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
