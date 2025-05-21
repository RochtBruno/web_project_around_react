import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'
import Main from './Main/Main.jsx'
import {useState, useEffect} from 'react'
import api from '../utils/api.js'
import CurrentUserContext from '../contexts/CurrentUserContext.js'

function App() {
	const [currentUser, setCurrentUser] = useState({})

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

	return (
		<div className="page">
			<CurrentUserContext.Provider value={{currentUser,handleUpdateUser, handleUpdateAvatar}}>
				<Header />
				<Main />
				<Footer />
			</CurrentUserContext.Provider>
		</div>
	)
}

export default App
