function Card({ card, onCardClick }) {
    function handleClick() {
        onCardClick(card);
    }

    return(
        <li className="place">
              <button
                className="place__trash-btn"
                type="button"
                aria-label="Удалить"
              ></button>
              <img 
                src={card.link} 
                alt={card.name} 
                className="place__photo" 
                onClick={handleClick} 
                />
              <div className="place__caption">
                <h2 className="place__title">{card.name}</h2>
                <div className="place__like">
                  <button
                    className="place__like-btn"
                    type="button"
                    aria-label="Нравится"
                  ></button>
                  <p className="place__like-counter">{card.likes.length}</p>
                </div>
              </div>
            </li>
    )
}

export default Card;