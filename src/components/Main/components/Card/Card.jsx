import React from 'react';
import deleteCard from '../../../../images/Trash.svg';
import likeButton from '../../../../images/Group.svg';
import ImagePopup from '../Popup/components/ImagePopup/imagePopup.jsx';

function Card(props) {
  const { name, link, likes } = props.card;

  const handleDelete = () => {
    if (props.onDelete) {
      props.onDelete(props.card);
    }
  };

  const handleImageClick = () => {
    const imageComponent = {
      title: '',
      children: <ImagePopup card={props.card} onClose={props.handleOpenPopup} />,
    };
    props.handleOpenPopup(imageComponent);
  };

  return (
    <div className="cards__card">
      <img
        className="cards__card-delete"
        src={deleteCard}
        alt="Deletar"
        onClick={handleDelete}
      />
      <div className="cards__card-image" onClick={handleImageClick}>
        <img
          className="cards__card-image-inner"
          src={link}
          alt="Imagem do card"
        />
      </div>
      <div className="cards__card-infos">
        <h2 className="cards__card-title">{name}</h2>
        <img className="cards__card-like" src={likeButton} alt="Curtir" />
      </div>
    </div>
  );
}

export default Card;