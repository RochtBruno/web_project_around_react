function EditAvatar(){
	return(
		<form className="popup__form popup__form_avatar">
			<input type="url" name="avatar" id="avatarInput" className="popup__input" placeholder="Link da imagem" required />
			<button type="submit" className="popup__button popup__button_avatar">Salvar</button>
		</form>
	)
}

export default EditAvatar