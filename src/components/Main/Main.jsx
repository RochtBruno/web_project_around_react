import { useState, useEffect, useContext } from 'react';

import editProfile from '../../images/edit.png';
import imageAddCard from '../../images/add.png';
// import profileImage from '../../images/profile_image.jpg';
import Popup from '../Popup/Popup.jsx';
import EditAvatar from '../EditAvatar/EditAvatar.jsx';
import EditProfile from '../EditProfile/EditProfile.jsx';
import NewCard from '../NewCard/NewCard.jsx';
import DeleteCard from '../DeleteCard/DeleteCard.jsx';
import Card from '../Card/Card.jsx'
import CurrentUserContext from '../../contexts/CurrentUserContext.js'
import api from '../../utils/api.js'

// const cards = [
//   {
//     isLiked: false,
//     _id: '5d1f0611d321eb4bdcd707dd',
//     name: 'Yosemite Valley',
//     link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
//     owner: '5d1f0611d321eb4bdcd707dd',
//     createdAt: '2019-07-05T08:10:57.741Z',
//   },
//   {
//     isLiked: false,
//     _id: '5d1f064ed321eb4bdcd707de',
//     name: 'Lake Louise',
//     link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
//     owner: '5d1f0611d321eb4bdcd707dd',
//     createdAt: '2019-07-05T08:11:58.324Z',
//   },
// ];

function Main() {
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);

  const currentUser = useContext(CurrentUserContext)

  useEffect(() => {
      api.getInitialCards()
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((err) => console.log("Erro ao buscar cards-> ", err))
  },[])

  const editProfilePopup = { title: 'Editar perfil', children: <EditProfile /> };
  const editAvatarPopup = { title: 'Atualizar a foto do perfil', children: <EditAvatar /> };
  const newCardPopup = { title: 'Novo local', children: <NewCard /> };

  const deleteCardPopup = (card) => {
    setPopup({
      title: 'Excluir imagem?',
      children: (
        <DeleteCard
          onClose={handleClosePopup}
          onConfirm={() => handleDeleteCard(card)}
        />
      ),
    });
  };

  function handleLike(card) {
    setCards((prevCards) =>
      prevCards.map((c) =>
        c._id === card._id ? { ...c, isLiked: !c.isLiked } : c
      )
    );
  }

  function handleDeleteCard(card) {
    setPopup(null);
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
        <img src={currentUser.avatar} alt="foto de perfil" />
      </div>
      <div className="profile__infos">
        <h2 className="profile__infos-title">{currentUser.name}</h2>
        <p className="profile__infos-description">{currentUser.about}</p>
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
          <Card
            key={card._id}
            card={card}
            onDelete={deleteCardPopup}
            handleOpenPopup={handleOpenPopup}
            onLike={() => handleLike(card)}
          />
        ))}
      </ul>
      {/* <div className="popup popup_type_image" >
        <div className="popup__content">
          <img className="popup__image" src="" alt="Imagem Ampliada" />
          <p className="popup__caption"></p>
          <img src="../images/close-modal.png" className="popup__close" alt="Fechar " />
        </div>
      </div> */}
    </>
  );
}

export default Main;