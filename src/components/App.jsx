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

	return (
		<div className="page">
			<CurrentUserContext.Provider value={currentUser}>
				<Header />
				<Main />
				<Footer />
			</CurrentUserContext.Provider>
		</div>
	)
}

export default App
