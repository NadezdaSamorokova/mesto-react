import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ isClicked: false, name: '', link: '', _id: '' });

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }
  
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  const handleCardClick = (card) => {
    setSelectedCard({ isClicked: true, name: card.name, link: card.link, _id: card._id });
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ isClicked: false, name: '', link: '', _id: '' });
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header/>
        <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
        />
        <Footer/>
      </div>

      <PopupWithForm name="edit" title="Редактировать профиль" button="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <fieldset className="popup__input-box">
          <input className="popup__input popup__name" id="nikname" type="text" name="nikname" minLength="2" maxLength="40" placeholder="Имя" required/>
          <span id="nikname-error" className="popup__error"></span>
          <input className="popup__input popup__occupation" id="occupation" type="text" name="occupation" maxLength="2" maxlength="200" placeholder="Профессиональная деятельность" required/>
          <span id="occupation-error" className="popup__error"></span>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm name="add" title="Новое место" button="Сохранить" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <fieldset className="popup__input-box">
          <input className="popup__input popup__title-text" id="name" type="text" name="name" minLength="2" maxLength="30" placeholder="Название" required/>
          <span id="name-error" className="popup__error"></span>
          <input className="popup__input popup__link" id="link" type="url" name="link" placeholder="Ссылка на картинку" required/>
          <span id="link-error" className="popup__error"></span>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm name="avatar" title="Обновить аватар" button="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <fieldset className="popup__input-box">
          <input className="popup__input popup__link" id="avatar" type="url" name="avatar" placeholder="Ссылка на аватар" required/>
          <span id="avatar-error" className="popup__error"></span>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm name="delete" title="Вы уверены?" button="Да"/>

      <ImagePopup name="image" card={selectedCard} onClose={closeAllPopups}/>

    </div>
  );
}

export default App;