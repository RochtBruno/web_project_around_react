import closeModal from '../../../../images/close-modal.png';

function Popup(props) {
  const { title, children, onClose } = props;

  return (
    <div className="popup opened">
      <div className="popup__content">
        <button
          className="popup__close"
          aria-label="Fechar popup"
          onClick={onClose}
        >
          <img src={closeModal} alt="botão de fechar modal" />
        </button>
        <h2 className="popup__title">{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default Popup;