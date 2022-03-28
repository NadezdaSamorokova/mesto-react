import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        const getUserData = [api.getUserInfo(), api.getCards()];
        Promise.all(getUserData)
        .then(([userData, cards]) => {
            setUserName(userData.name);
            setUserDescription(userData.about);
            setUserAvatar(userData.avatar);
            setCards(cards);
    })
    .catch((err) => {
        console.log(err)
    });
    }, [])

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-edit">
                    <div className="profile__avatar profile__avatar-edit-button" style={{ backgroundImage: `url(${userAvatar})` }} onClick={onEditAvatar}/>
                </div>
                <div className="profile-info">
                    <div className="profile-info__edit-name">
                        <h1 className="profile-info__name">{userName}</h1>
                        <button className="profile-info__edit-button" type="button" onClick={onEditProfile}></button>
                    </div>
                    <p className="profile-info__occupation">{userDescription}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
            </section>

            <section className="elements">
                <ul className="elements__list">  
                {
                    cards.map((card) => (
                        <Card key={card._id} card={card} onCardClick={onCardClick}/>
                    ))
                }           
                </ul>
            </section>
        </main>
    );
}

export default Main;