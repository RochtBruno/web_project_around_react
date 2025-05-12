import closeModal from '../../../../../../images/close-modal.png';

function ImagePopup({ card, onClose }) {
    if (!card) return null;

    return (
        <>
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
        </>
    );
}

export default ImagePopup;