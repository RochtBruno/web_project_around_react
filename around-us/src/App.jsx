import { useState } from 'react'
import logo from './images/logo.png'
import closeModal from './images/close-modal.png'
import editProfile from './images/edit.png'
import imageAddCard from './images/add.png'
import profileImage from './images/profile_image.jpg'

function App() {
  //const [count, setCount] = useState(0)

  return (
        <div className="page">
          <header className="header">
            <img className="header__logo" src={logo} alt="logo do website" />
          </header>
          <section className="profile">
            <div className="profile__overlay"></div>
            <div className="profile__modal">
              <img className="profile__modal-close" src={closeModal} alt="botão de fechar modal" />
              <h2 className="profile__modal-title">Editar perfil</h2>
              <form className="profile__modal-form">
                <input name="name" type="text" id="nameInput" className="profile__modal-input" placeholder="Nome" required />
                <input name="job" type="text" id="jobInput" className="profile__modal-input" placeholder="Sobre mim" required />
                <button type="submit" className="profile__modal-button">Salvar</button>
              </form>
            </div>
            <div className="popup popup_type_avatar" >
              <div className="popup__content">
                <img className="popup__close popup__close_avatar" src={closeModal} alt="botão de fechar modal" />
                <h3 className="popup__title popup__title_avatar">Atualizar a foto do perfil</h3>
                <form className="popup__form popup__form_avatar">
                <input
                  type="url"
                  name="avatar"
                  id="avatarInput"
                  className="popup__input"
                  placeholder="Link da imagem"
                  required
                />
                <button type="submit" className="popup__button popup__button_avatar">Salvar</button>
                </form>
                </div>
              </div>
            <div className="profile__image">
              <img src={profileImage} alt="foto de perfil" />
            </div>
            <div className="profile__infos">
              <h2 className="profile__infos-title"></h2>
              <p className="profile__infos-description"></p>
              <div className="profile__infos-edit">
                <img src={editProfile} alt="botão de editar perfil" />
              </div>
            </div>
            <div className="profile__modal-add">
              <img className="profile__modal-add-close" src={closeModal} alt="botão de fechar modal" />
              <h2 className="profile__modal-add-title">Novo local</h2>
              <form className="profile__modal-add-form">
                <input type="text" name="title" id="titleInput" className="profile__modal-input" placeholder="Título" required />
                <input type="url" name="link" id="linkInput" className="profile__modal-input" placeholder="Link da imagem" required />
                <button type="submit" className="profile__modal-button">Criar</button>
              </form>
            </div>
            <div className="profile__button">
              <div className="profile__button-rectangle">
                <img src={imageAddCard} alt="botão de adicionar card" />
              </div>
            </div>
          </section>
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
          <footer className="footer">
            <p className="footer__content">&copy; Around The U.S.</p>
          </footer>
        </div>
  )
}

export default App
