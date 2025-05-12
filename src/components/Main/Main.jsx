import { useState } from 'react';

import editProfile from '../../images/edit.png';
import imageAddCard from '../../images/add.png';
import profileImage from '../../images/profile_image.jpg';
import Popup from './components/Popup/Popup.jsx';
import EditAvatar from './components/Popup/components/EditAvatar/EditAvatar.jsx';
import EditProfile from './components/Popup/components/EditProfile/EditProfile.jsx';
import NewCard from './components/Popup/components/NewCard/NewCard.jsx';
import DeleteCard from './components/Popup/components/DeleteCard/DeleteCard.jsx';
import Card from './components/Card/Card.jsx'

const cards = [
  {
    isLiked: false,
    _id: '5d1f0611d321eb4bdcd707dd',
    name: 'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z',
  },
  {
    isLiked: false,
    _id: '5d1f064ed321eb4bdcd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
];

console.log(cards);

function Main() {
  const [popup, setPopup] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const editProfilePopup = { title: 'Editar perfil', children: <EditProfile /> };
  const editAvatarPopup = { title: 'Atualizar a foto do perfil', children: <EditAvatar /> };
  const newCardPopup = { title: 'Novo local', children: <NewCard /> };

  const deleteCardPopup = (card) => {
    setSelectedCard(card);
    setPopup({
      title: '',
      children: (
        <DeleteCard
          onClose={handleClosePopup}
          onConfirm={() => handleDeleteCard(card)}
        />
      ),
    });
  };

  function handleDeleteCard(card) {
    console.log('Card deletado:', card);
    setPopup(null);
    setSelectedCard(null);
  }

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <>
        <section className="profile">
      <div className="profile__image" onClick={() => handleOpenPopup(editAvatarPopup)}>
        <img src={profileImage} alt="foto de perfil" />
      </div>
      <div className="profile__infos">
        <h2 className="profile__infos-title">Jacques Costeau</h2>
        <p className="profile__infos-description">Explorador</p>
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
        <>
          <div className="popup__overlay" onClick={handleClosePopup}></div>
          <Popup onClose={handleClosePopup} title={popup.title}>
            {popup.children}
          </Popup>
        </>
      )}
    </section>
      <div className="loading-spinner" id="loadingSpinner"></div>
      <ul className="cards">
        {cards.map((card) => (
          <Card key={card._id} card={card} onDelete={deleteCardPopup} />
        ))}
      </ul>
      <div className="popup popup_type_image" >
        <div className="popup__content">
          <img className="popup__image" src="" alt="Imagem Ampliada" />
          <p className="popup__caption"></p>
          <img src="../images/close-modal.png" className="popup__close" alt="Fechar " />
        </div>
      </div>
    </>
  );
}

export default Main;