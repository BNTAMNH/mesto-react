function Card(props) {
    return(
        <li className="place">
              <button
                className="place__trash-btn"
                type="button"
                aria-label="Удалить"
              ></button>
              <img src={props.link} alt={props.name} className="place__photo" />
              <div className="place__caption">
                <h2 className="place__title">{props.name}</h2>
                <div className="place__like">
                  <button
                    className="place__like-btn"
                    type="button"
                    aria-label="Нравится"
                  ></button>
                  <p className="place__like-counter">{props.likes.length}</p>
                </div>
              </div>
            </li>
    )
}

export default Card;