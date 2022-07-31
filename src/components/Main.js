import { useState, useEffect, useContext } from "react";
import api from "../utils/api.js"
import Card from "../components/Card"
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Main(props) {

  const currentUser = useContext(CurrentUserContext); 
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getInitialCards()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((err) => {
        console.log(err);
      });
} 

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar">
            <img
              src={currentUser.avatar}
              alt="Фото профиля"
              className="profile__photo"
            />
            <button
              onClick={props.onEditAvatar}
              className="profile__photo-btn"
              type="button"
              aria-label="Редактировать аватар"
            ></button>
          </div>
          <div className="profile__data">
            <h1 className="profile__name">{currentUser.name}</h1>
            <p className="profile__about-me">{currentUser.about}</p>
            <button
              onClick={props.onEditProfile}
              className="profile__edit-btn"
              type="button"
              aria-label="Редактировать профиль"
            ></button>
          </div>
        </div>
        <button
          onClick={props.onAddPlace}
          className="profile__add-btn"
          type="button"
          aria-label="Добавить фото"
        ></button>
      </section>
      <section className="places" aria-label="Место">
        <ul className="places__list">
          {cards.map((item) => {
            return (
              <Card 
                card = {item}
                onCardClick = {props.onCardClick}
                key = {item._id}
                onCardLike = {handleCardLike}
              />
            )
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;