function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name}`}>
        <div className="popup__container">
          <button
            className="popup__close-btn"
            type="button"
            aria-label="Закрыть"
          ></button>
          <h2 className="popup__title">{props.title}</h2>
          <form
            action="submit"
            name={props.name}
            className={`popup__form popup__form_type_${props.name}`}
            novalidate
          >
            {props.children}
          </form>
        </div>
    </div>
  );
}

export default PopupWithForm;