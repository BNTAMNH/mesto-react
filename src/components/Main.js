import { useState, useEffect } from "react";
import api from "../utils/api.js"
import Card from "../components/Card"

function Main(props) {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo()
      .then((userData) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch((err) => {
        console.log(err);
      });

    api.getInitialCards()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar">
            <img
              src={userAvatar}
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
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__about-me">{userDescription}</p>
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
              />
            )
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;