function EditProfile(){
	return(
		<form className="profile__modal-form">
			<input name="name" type="text" id="nameInput" className="profile__modal-input" placeholder="Nome" required />
			<input name="job" type="text" id="jobInput" className="profile__modal-input" placeholder="Sobre mim" required />
			<button type="submit" className="profile__modal-button">Salvar</button>
		</form>
	)
}

export default EditProfile