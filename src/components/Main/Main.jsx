import closeModal from '../../images/close-modal.png'
import editProfile from '../../images/edit.png'
import imageAddCard from '../../images/add.png'
import profileImage from '../../images/profile_image.jpg'

function Main(){
	return (
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
	)
}

export default Main;