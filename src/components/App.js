import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main 
          onEditProfile = {handleEditProfileClick}
          onAddPlace = {handleAddPlaceClick}
          onEditAvatar = {handleEditAvatarClick}
          onCardClick = {handleCardClick}
        />
        <Footer />
      </div>

      <PopupWithForm
        name = 'edit'
        isOpen = {isEditProfilePopupOpen}
        onClose={closeAllPopups}
        title = 'Редактировать профиль'
        buttonText='Сохранить'
        >
          <input
            type="text"
            name="popup__name"
            required
            className="popup__input popup__input_type_name"
            id="name"
            minLength="2"
            maxLength="40"
            placeholder="Имя"
          />
          <span className="popup__input-error name-error"></span>
          <input
            type="text"
            name="popup__about-me"
            required
            className="popup__input popup__input_type_about-me"
            id="about"
            minLength="2"
            maxLength="200"
            placeholder="О себе"
          />
          <span className="popup__input-error about-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name = 'add'
        isOpen = {isAddPlacePopupOpen}
        onClose = {closeAllPopups}
        title = 'Новое место'
        buttonText='Сохранить'
        >
         <input
          type="text"
          name="popup__title"
          required
          className="popup__input popup__input_type_title"
          id="title"
          minLength="2"
          maxLength="30"
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
      </PopupWithForm>

      <PopupWithForm
        name = 'avatar-edit'
        isOpen = {isEditAvatarPopupOpen}
        onClose = {closeAllPopups}
        title = 'Обновить аватар'
        buttonText='Сохранить'
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
      </PopupWithForm>

      <PopupWithForm
        name = 'confirm'
        onClose = {closeAllPopups}
        title = 'Вы уверены?'
        buttonText='Да'
      >
      </PopupWithForm>

      <ImagePopup 
        card = {selectedCard}
        onClose = {closeAllPopups}
      />

  </>
  );
}

export default App;
