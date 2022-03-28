function PopupWithForm({name, isOpen, onClose, title, button, children}) {
    return (
        <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
            <button className="popup__close-icon" type="button" onClick={onClose}></button>
                <h3 className="popup__title">{title}</h3>
                <form className="popup__form" name={name} noValidate>
                    {children}
                    <button className="popup__submit-button popup__submit-text" type="submit">{button}</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;