function ImagePopup({ card, onClose }) {
  if (card !== null) {

    return (
      <div className={'popup popup_type_photo popup_opened'}>
        <figure className="popup__view">
          <img src={card.link} alt={card.name} className="popup__photo" />
          <figcaption className="popup__caption">{card.name}</figcaption>
          <button
            className="popup__close-btn"
            type="button"
            aria-label="Закрыть"
            onClick={onClose}
          ></button>
        </figure>
      </div>
    );
  }
}

export default ImagePopup;