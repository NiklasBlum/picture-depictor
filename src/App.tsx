import './App.css'
import Img1 from './assets/IMG1.png'
import Img2 from './assets/IMG2.png'
import Img3 from './assets/IMG3.png'

export default function App() {

  const images = [Img1, Img2, Img3];

  const random = Math.floor(Math.random() * images.length);
  console.log(images[random]);

  return (
    <div className="App">
      <div className='image'>
        <img src={images[random]} alt="" />
      </div>
    </div>
  )
}