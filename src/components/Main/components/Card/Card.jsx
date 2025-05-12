import deleteCard from '../../../../images/Trash.svg'
import likeButton from '../../../../images/Group.svg'

function Card(props){
    const {name, link, likes} = props.card
    return(
        <div className="cards__card">
            <img className="cards__card-delete" src={deleteCard} alt="Deletar" />
            <div className="cards__card-image">
            <img className="cards__card-image-inner" src={link} alt="Imagem do card" />
            </div>
            <div className="cards__card-infos">
            <h2 className="cards__card-title">{name}</h2>
            <img className="cards__card-like" src={likeButton} alt="Curtir" />
            </div>
        </div>
    )
}

export default Card