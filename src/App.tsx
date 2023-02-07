import { useEffect, useState } from 'react';
import './App.css'

import getImages from "./helper/getImages";

export default function App() {

  const [images, setImages] = useState([]);
  const [image, setImage] = useState();

  useEffect(() => {
    async function loadImages() {
      setImages(await getImages());
    }

    loadImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setImage(getRandom);
    }, 3000);
    return () => clearInterval(interval);
  }, [image]);

  function getRandom() {
    const random = Math.floor(Math.random() * images.length);
    console.log("refresh");
    return images[random];
  }

  return (
    <div className="App">
      <div className='image'>
        <img src={image} />
      </div>
    </div>
  )
}