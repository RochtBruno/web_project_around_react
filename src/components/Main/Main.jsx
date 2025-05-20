import { useState, useEffect, useContext } from 'react';
import editProfile from '../../images/edit.png';
import imageAddCard from '../../images/add.png';
import Popup from '../Popup/Popup.jsx';
import EditAvatar from '../EditAvatar/EditAvatar.jsx';
import EditProfile from '../EditProfile/EditProfile.jsx';
import NewCard from '../NewCard/NewCard.jsx';
import DeleteCard from '../DeleteCard/DeleteCard.jsx';
import Card from '../Card/Card.jsx'
import CurrentUserContext from '../../contexts/CurrentUserContext.js'
import api from '../../utils/api.js'

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
  const likeRequest = card.isLiked ? api.removeLike(card._id) : api.addLike(card._id);

  likeRequest
    .then((updatedCard) => {
      setCards((prevCards) =>
        prevCards.map((c) =>
          c._id === card._id ? { ...c, ...updatedCard, isLiked: !card.isLiked } : c
        )
      );
    })
    .catch((err) => {
      console.error('Erro ao atualizar like:', err);
    });
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
    </>
  );
}

export default Main;