import '../pages/index.css';
import * as modal from '../components/modal.js';
import * as card from '../components/card.js'


const editProfileButton = document.querySelector('.profile__edit-button');
const addCardButton = document.querySelector('.profile__add-button');
const editPopup = document.querySelector('.popup_type_edit');
const newCardPopup = document.querySelector('.popup_type_new-card');
const closePopupButtons = document.querySelectorAll('.popup__close');
const popups = document.querySelectorAll('.popup');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

const popupProfileForm = document.forms['edit-profile'];
const popupInputProfileName = popupProfileForm.elements.name;
const popupInputProfileDescription = popupProfileForm.elements.description;

function handleFormSubmit(evt) {
    evt.preventDefault();profileTitle.textContent = popupInputProfileName.value;
    profileDescription.textContent = popupInputProfileDescription.value;

    modal.closeModal(editPopup);
}

popupProfileForm.addEventListener('submit', handleFormSubmit);

editProfileButton.addEventListener('click', () => {
    popupInputProfileName.value = profileTitle.textContent;
    popupInputProfileDescription.value = profileDescription.textContent;
    modal.openModal(editPopup);
});

const popupNewCardForm = document.forms['new-place'];
const popupInputCardName = popupNewCardForm.elements['place-name'];
const popupInputCardLink = popupNewCardForm.elements.link;

function handleCardFormSubmit(evt) {
    evt.preventDefault();
    
    card.placesList.prepend(card.createCard(popupInputCardName.value, popupInputCardLink.value, card.deleteCard));

    modal.closeModal(newCardPopup);
    popupNewCardForm.reset();
}

popupNewCardForm.addEventListener('submit', handleCardFormSubmit);

addCardButton.addEventListener('click', () => {
    modal.openModal(newCardPopup);
});

closePopupButtons.forEach(item => {
    popups.forEach(pop => {
        item.addEventListener('click', () => {
            modal.closeModal(pop);
        });
    });
});
