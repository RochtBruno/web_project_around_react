

function EditAvatar() {
    return (
        <form className="popup__form">
            <input type="url" name="avatar" id="avatarInput" className="popup__input" placeholder="Link da imagem" required />
            <button type="submit" className="popup__btn">Salvar</button>
        </form>
    );
}

export default EditAvatar;