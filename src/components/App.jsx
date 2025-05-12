import { useState } from 'react'
import closeModal from '../images/close-modal.png'
import editProfile from '../images/edit.png'
import imageAddCard from '../images/add.png'
import profileImage from '../images/profile_image.jpg'
import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'
import Main from './Main/Main.jsx'


function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
