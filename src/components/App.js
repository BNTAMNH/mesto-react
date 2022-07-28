import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main 
          onEditProfile = {handleEditProfileClick}
          onAddPlace = {handleAddPlaceClick}
          onEditAvatar = {handleEditAvatarClick}
        />
        <Footer />
      </div>

      <PopupWithForm
        name = 'edit'
        isOpen = {isEditProfilePopupOpen}
        onClose={closeAllPopups}
        title = 'Редактировать профиль'
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
      </PopupWithForm>

      <PopupWithForm
        name = 'add'
        isOpen = {isAddPlacePopupOpen}
        onClose = {closeAllPopups}
        title = 'Новое место'
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
      </PopupWithForm>

      <PopupWithForm
        name = 'avatar-edit'
        isOpen = {isEditAvatarPopupOpen}
        onClose = {closeAllPopups}
        title = 'Обновить аватар'
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
      </PopupWithForm>
    

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

  </>
  );
}

export default App;
