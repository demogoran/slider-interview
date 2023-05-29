import React, { useEffect, useState } from "react";
import { ApiImages } from "./utils/api.images";

import Slider from "./components/Slider";
import Gallery from "./components/Gallery";

import "./App.scss";

function App() {
  const [images, setImages] = useState([]);
  const [isGallery, setIsGallery] = useState(false);

  useEffect(() => {
    (async () => {
      const api = new ApiImages();
      const data = await api.getImagesList();
      setImages(data);
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setIsGallery(!isGallery)}>Toggle view</button>
      </header>

      <div className="container">
        {isGallery ? (
          <Gallery images={images}></Gallery>
        ) : (
          <Slider images={images}></Slider>
        )}
      </div>
    </div>
  );
}

export default App;
