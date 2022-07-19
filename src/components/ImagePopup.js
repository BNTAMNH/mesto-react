function ImagePopup() {
  return (
    <div className="popup popup_type_photo">
    <figure className="popup__view">
      <img src="#" alt="" className="popup__photo" />
      <figcaption className="popup__caption"></figcaption>
      <button
        className="popup__close-btn"
        type="button"
        aria-label="Закрыть"
      ></button>
    </figure>
    </div>
  );
}

export default ImagePopup;