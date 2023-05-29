import React, { useEffect, useState } from "react";
import { ApiImages } from "./utils/api.images";

import Slider from "./components/Slider";

import "./App.scss";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    (async () => {
      const api = new ApiImages();
      const data = await api.getImagesList();
      setImages(data);
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>

      <div className="container">
        <Slider images={images}></Slider>
      </div>
    </div>
  );
}

export default App;
