
function NewCard(){
	return(
		<form className="profile__modal-add-form">
			<input type="text" name="title" id="titleInput" className="profile__modal-input" placeholder="Título" required />
			<input type="url" name="link" id="linkInput" className="profile__modal-input" placeholder="Link da imagem" required />
			<button type="submit" className="profile__modal-button">Criar</button>
		</form>
	)
}

export default NewCard