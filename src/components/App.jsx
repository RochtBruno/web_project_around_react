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
          <section className="cards">

          </section>
          <div className="loading-spinner" id="loadingSpinner"></div>
          <template id="card-template">
            <div className="cards__card">
              <img className="cards__card-delete" src="../images/Trash.svg" alt="Deletar" />
              <div className="cards__card-image">
              <img className="cards__card-image-inner" src="#" alt="Imagem do card" />
              </div>
              <div className="cards__card-infos">
              <h2 className="cards__card-title"></h2>
              <img className="cards__card-like" src="../images/Group.svg" alt="Curtir" />
              </div>
            </div>
            </template>
            <div className="popup popup_type_confirm">
              <div className="popup__content">
                <img className="popup__close popup__close_confirm" src="../images/close-modal.png" alt="botão de fechar modal" />
                <h3 className="popup__title popup__title_confirm">Tem certeza?</h3>
                <button type="button" className="popup__button popup__button_confirm">Sim</button>
              </div>
            </div>
            <div className="popup popup_type_image" >
              <div className="popup__content">
                <img className="popup__image" src="" alt="Imagem Ampliada" />
                <p className="popup__caption"></p>
                <img src="../images/close-modal.png" className="popup__close" alt="Fechar " />
              </div>
            </div>
          <Footer />
        </div>
  )
}

export default App
