import closeModal from '../../../../../../images/close-modal.png';

function ImagePopup({ card, onClose }) {
  if (!card) return null;

  return (
    <div className="popup opened">
      <div className="popup__content popup__content_content_image">
        <img
          className="popup__close"
          src={closeModal}
          alt="Fechar"
          onClick={onClose}
        />
        <img
          className="popup__image"
          src={card.link}
          alt={card.name}
        />
        <p className="popup__caption">{card.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;