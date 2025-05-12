import { useState } from 'react';

import editProfile from '../../images/edit.png';
import imageAddCard from '../../images/add.png';
import profileImage from '../../images/profile_image.jpg';
import Popup from './components/Popup/Popup.jsx';
import EditAvatar from './components/Popup/components/EditAvatar/EditAvatar.jsx';
import EditProfile from './components/Popup/components/EditProfile/EditProfile.jsx';
import NewCard from './components/Popup/components/NewCard/NewCard.jsx';

function Main() {
  const [popup, setPopup] = useState(null);

  const editProfilePopup = { title: 'Editar perfil', children: <EditProfile /> };
  const editAvatarPopup = { title: 'Atualizar a foto do perfil', children: <EditAvatar /> };
  const newCardPopup = { title: 'Novo local', children: <NewCard /> };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <section className="profile">
      <div className="profile__image" onClick={() => handleOpenPopup(editAvatarPopup)}>
        <img src={profileImage} alt="foto de perfil" />
      </div>
      <div className="profile__infos">
        <h2 className="profile__infos-title">Seu Nome</h2>
        <p className="profile__infos-description">Sua descrição</p>
        <div className="profile__infos-edit" onClick={() => handleOpenPopup(editProfilePopup)}>
          <img src={editProfile} alt="botão de editar perfil" />
        </div>
      </div>
      <div className="profile__button" onClick={() => handleOpenPopup(newCardPopup)}>
        <div className="profile__button-rectangle">
          <img src={imageAddCard} alt="botão de adicionar card" />
        </div>
      </div>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </section>
  );
}

export default Main;