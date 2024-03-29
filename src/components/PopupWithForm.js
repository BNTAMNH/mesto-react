function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}>
        <div className="popup__container">
          <button
            className="popup__close-btn"
            type="button"
            aria-label="Закрыть"
            onClick={props.onClose}
          ></button>
          <h2 className="popup__title">{props.title}</h2>
          <form
            onSubmit={props.onSubmit}
            action="submit"
            name={props.name}
            className={`popup__form popup__form_type_${props.name}`}
            noValidate
          >
            {props.children}
            <button className="popup__save-btn" type="submit">{props.buttonText}</button>
          </form>
        </div>
    </div>
  );
}

export default PopupWithForm;