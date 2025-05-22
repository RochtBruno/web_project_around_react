import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'
import Main from './Main/Main.jsx'
import {useState, useEffect} from 'react'
import api from '../utils/api.js'
import CurrentUserContext from '../contexts/CurrentUserContext.js'

function App() {
	const [currentUser, setCurrentUser] = useState({})
	const [card, setCard] = useState([])
	const [popup, setPopup] = useState(null);

	useEffect(() => {
		api.getUser()
		.then((res) => res.json())
		.then((data) => setCurrentUser(data))
	},[])

	const handleUpdateUser = (name,about) => {
		api.updateUser(name,about)
		.then((res) => res.json())
		.then((userData) => {
			setCurrentUser(userData)
		})
		.catch((err)=>{
			console.log("Erro ao atualizar usuário",err)
		})
	}

	const handleUpdateAvatar = (avatarUrl) => {
		api.updateAvatar(avatarUrl)
		.then((res) => res.json())
		.then(userData => setCurrentUser(userData))
		.catch(err => console.log("Erro ao mudar avatar",err))
	}

	const getCardList = () => {
		api.getInitialCards()
			.then((res) => res.json())
			.then((data) => setCard(data))
			.catch((err) => console.log("Erro ao buscar cards-> ", err))
	}

	const handleAddPlaceSubmit = (card) => {
		api.createCard(card)
		.then((res) => res.json())
		.then((newCard) => setCard((prevCards) => [newCard, ...prevCards]))
		.catch(err => console.log("Erro ao criar card ",err))
	}

	const handleCardLike = (card) => {
		const likeRequest = card.isLiked ? api.removeLike(card._id) : api.addLike(card._id);

		likeRequest
			.then((updatedCard) => {
				setCard((prevCards) =>
					prevCards.map((c) =>
						c._id === card._id ? { ...c, ...updatedCard, isLiked: !card.isLiked } : c
					)
				);
			})
			.catch((err) => {
				console.error('Erro ao atualizar like:', err);
			});
	}

	const handleCardDelete = (card) => {
		api.deleteCard(card._id)
			.then(() => {
				setCard((prevCards) => prevCards.filter((c) => c._id !== card._id));
				setPopup(null)
			})
			.catch((err) => {
				console.log("Erro ao deletar card", err)
				setPopup(null)
			})
	}

	return (
		<div className="page">
			<CurrentUserContext.Provider value={{currentUser,handleUpdateUser, handleUpdateAvatar}}>
				<Header />
				<Main onCardLike={handleCardLike} 
				onCardDelete={handleCardDelete} 
				getCardList={getCardList}
				onAddPlaceSubmit={handleAddPlaceSubmit}
				cardState={card} 
				popupState={popup} 
				setPopupState={setPopup}/>
				<Footer />
			</CurrentUserContext.Provider>
		</div>
	)
}

export default App
