// Не готов компонент, необходимо доделать

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
            <input
              type="text"
              name="popup__name"
              required
              className="popup__input popup__input_type_name"
              id="name"
              minlength="2"
              maxlength="40"
              placeholder="Имя"
            />
            <span className="popup__input-error name-error"></span>
            <input
              type="text"
              name="popup__about-me"
              required
              className="popup__input popup__input_type_about-me"
              id="about"
              minlength="2"
              maxlength="200"
              placeholder="О себе"
            />
            <span className="popup__input-error about-error"></span>
            <button className="popup__save-btn" type="submit">Сохранить</button>
          </form>
        </div>
    </div>
  );
}

export default PopupWithForm;