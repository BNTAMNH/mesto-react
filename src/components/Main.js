function Main() {
  function handleEditAvatarClick() {
    document.querySelector('.popup_type_avatar-edit').classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    document.querySelector('.popup_type_edit').classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    document.querySelector('.popup_type_add').classList.add('popup_opened');
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar">
            <img
              src="#"
              alt="Фото профиля"
              className="profile__photo"
            />
            <button
              onClick={handleEditAvatarClick}
              className="profile__photo-btn"
              type="button"
              aria-label="Редактировать аватар"
            ></button>
          </div>
          <div className="profile__data">
            <h1 className="profile__name"></h1>
            <p className="profile__about-me"></p>
            <button
              onClick={handleEditProfileClick}
              className="profile__edit-btn"
              type="button"
              aria-label="Редактировать профиль"
            ></button>
          </div>
        </div>
        <button
          onClick={handleAddPlaceClick}
          className="profile__add-btn"
          type="button"
          aria-label="Добавить фото"
        ></button>
      </section>
      <section className="places" aria-label="Место">
        <ul className="places__list">
          <template id="place">
            <li className="place">
              <button
                className="place__trash-btn"
                type="button"
                aria-label="Удалить"
              ></button>
              <img src="#" alt="" className="place__photo" />
              <div className="place__caption">
                <h2 className="place__title"></h2>
                <div className="place__like">
                  <button
                    className="place__like-btn"
                    type="button"
                    aria-label="Нравится"
                  ></button>
                  <p className="place__like-counter"></p>
                </div>
              </div>
            </li>
          </template>
        </ul>
      </section>
    </main>
  );
}

export default Main;