const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');

function createCard(title, link, deleteCard){
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    
    const cardImage = cardElement.querySelector('.card__image');
    cardImage.src = link;
    cardImage.alt = title;
    cardElement.querySelector('.card__title').textContent = title;

    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', deleteCard);
    
    return cardElement;
}

function deleteCard(evt){
    const listItem = evt.target.closest('.card');
    listItem.remove();
}

initialCards.forEach((item) => {
    placesList.append(createCard(item.name, item.link, deleteCard));
});