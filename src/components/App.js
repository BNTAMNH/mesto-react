//Работа остановлена на пункте Декларативный подход

import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>

    <div className="popup popup_type_edit">
      <div className="popup__container">
        <button
          className="popup__close-btn"
          type="button"
          aria-label="Закрыть"
        ></button>
        <h2 className="popup__title">Редактировать профиль</h2>
        <form
          action="submit"
          name="popup-edit-profile"
          className="popup__form popup__form_type_edit"
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

    <div className="popup popup_type_add">
    <div className="popup__container">
      <button
        className="popup__close-btn"
        type="button"
        aria-label="Закрыть"
      ></button>
      <h2 className="popup__title">Новое место</h2>
      <form
        action="submit"
        name="popup-add-card"
        className="popup__form popup__form_type_add"
        novalidate
      >
        <input
          type="text"
          name="popup__title"
          required
          className="popup__input popup__input_type_title"
          id="title"
          minlength="2"
          maxlength="30"
          placeholder="Название"
        />
        <span className="popup__input-error title-error"></span>
        <input
          name="popup__photo-link"
          required
          className="popup__input popup__input_type_photo-link"
          id="link"
          type="url"
          placeholder="Ссылка на картинку"
        />
        <span className="popup__input-error link-error"></span>
        <button className="popup__save-btn" type="submit">Сохранить</button>
      </form>
    </div>
    </div>

    

    <div className="popup popup_type_confirm">
    <div className="popup__container">
      <button
        className="popup__close-btn"
        type="button"
        aria-label="Закрыть"
      ></button>
      <h2 className="popup__title">Вы уверены?</h2>
      <button className="popup__save-btn" type="button">Да</button>
    </div>
    </div>

    <div className="popup popup_type_avatar-edit">
    <div className="popup__container">
      <button
        className="popup__close-btn"
        type="button"
        aria-label="Закрыть"
      ></button>
      <h2 className="popup__title">Обновить аватар</h2>
      <form
        action="submit"
        name="popup-avatar"
        className="popup__form popup__form_type_avatar"
        novalidate
      >
        <input
          name="popup__avatar-link"
          required
          className="popup__input"
          id="avatar"
          type="url"
          placeholder="https://somewebsite.com/someimage.jpg"
        />
        <span className="popup__input-error avatar-error"></span>
        <button className="popup__save-btn" type="submit">Сохранить</button>
      </form>
    </div>
    </div>
  </>
  );
}

export default App;
