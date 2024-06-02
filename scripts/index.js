const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');

function createCard(title, link, deleteCard){
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    
    cardElement.querySelector('.card__image').src = link;
    cardElement.querySelector('.card__title').textContent = title;

    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', deleteCard);

    placesList.append(cardElement);
}

function deleteCard(evt){
    const listItem = evt.target.closest('.card');
    listItem.remove();
}

initialCards.forEach((item) => {
    createCard(item.name, item.link, deleteCard);
});