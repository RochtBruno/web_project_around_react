

function EditProfile() {
    return (
        <form className="popup__form">
            <input name="name" type="text" id="nameInput" className="popup__input" placeholder="Nome" required />
            <input name="job" type="text" id="jobInput" className="popup__input" placeholder="Sobre mim" required />
            <button type="submit" className="popup__btn">Salvar</button>
        </form>
    );
}

export default EditProfile;