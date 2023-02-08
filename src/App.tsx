import { useEffect, useState } from 'react';
import './App.css'

import getImages from "./helper/getImages";

export default function App() {

  const [images, setImages] = useState([]);
  const [image, setImage] = useState();

  useEffect(() => {
    loadImages();
  }, []);

  async function loadImages() {
    setImages(await getImages());
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setImage(getRandom);
    }, 3000);
    return () => clearInterval(interval);
  });

  function getRandom() {
    const random = Math.floor(Math.random() * images.length);
    return images[random];
  }

  return (
    <div className="App">
      <img className="image" src={image} />
    </div>
  )
}