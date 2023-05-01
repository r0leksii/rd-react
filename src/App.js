import './App.css'
import photo from './img/photo_oleksii_800.webp'
import { Image } from './components/Image'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'

function App() {
  return (
    <div className="App">
      <div>
        <Image src={photo} alt="photo" />
        <Contact />
      </div>

      <div>
        <Experience />
      </div>
    </div>
  )
}

export default App
