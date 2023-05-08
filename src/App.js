import './App.css'
import photo from './img/photo_oleksii_800.webp'
import { Image } from './components/Image'
import { Contact } from './components/Contact'
import Experiences from './components/Experiences'
import Counter from './components/Counter'
import Mygithub from './components/Mygithub'

function App() {
  return (
    <div className="App">
      <div>
        <Image src={photo} alt="photo" />
        <Contact />
      </div>

      <div className="right-block">
        <Counter />
        <Experiences />
        <Mygithub />
      </div>
    </div>
  )
}

export default App
