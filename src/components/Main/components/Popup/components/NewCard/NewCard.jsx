

function NewCard() {
    return (
        <form className="popup__form">
            <input type="text" name="title" id="titleInput" className="popup__input" placeholder="Título" required />
            <input type="url" name="link" id="linkInput" className="popup__input" placeholder="Link da imagem" required />
            <button type="submit" className="popup__btn">Criar</button>
        </form>
    );
}

export default NewCard;