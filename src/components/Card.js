function Card({card, onCardClick}) {
    
    const handleCardClick = () => {
        onCardClick(card);
    }

    return (
        <li className="element">
            <button className="element__button-delete" type="button"></button>
            <img className="element__image" src={card.link} alt={card.name} onClick={handleCardClick}/>
            <div className="element__discription">
                <h2 className="element__title">{card.name}</h2>
                <div className="element__like-group">
                    <button className="element__button-like" type="button"></button>
                    <p className="element__like-counter">{card.likes.length}</p>
                </div> 
            </div>
        </li>   
    )
}

export default Card;