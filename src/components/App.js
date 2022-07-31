import { useState, useEffect } from "react";
import api from "../utils/api.js";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import EditProfilePopup from "./EditProfilePopup";

function App() {

  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    api.getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

  function handleUpdateUser(data) {
    api.setUserInfo(data)
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.log(err);
      });
    closeAllPopups();
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
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

      <EditProfilePopup 
        isOpen={isEditProfilePopupOpen} 
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser} 
      />

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

  </CurrentUserContext.Provider>
  );
}

export default App;
