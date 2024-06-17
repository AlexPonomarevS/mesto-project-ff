import * as modal from "./modal.js";

export const cardTemplate = document.querySelector("#card-template").content;
export const placesList = document.querySelector(".places__list");
export const cardPopup = document.querySelector(".popup_type_image");
export const cardPopupImg = document.querySelector(".popup__image");
export const cardPopupTitle = document.querySelector(".popup__caption");

export function createCard(
  title,
  link,
  deleteCard,
  likeCard,
  handleImageClick
) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image");
  cardImage.src = link;
  cardImage.alt = title;
  cardElement.querySelector(".card__title").textContent = title;

  cardImage.addEventListener("click", handleImageClick);

  const likeButton = cardElement.querySelector(".card__like-button");
  likeButton.addEventListener("click", likeCard);

  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", deleteCard);

  return cardElement;
}

export function deleteCard(evt) {
  const listItem = evt.target.closest(".card");
  listItem.remove();
}

export function likeCard(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}

export function handleImageClick(evt) {
  cardPopupImg.alt = evt.target.alt;
  cardPopupImg.src = evt.target.src;
  cardPopupTitle.textContent = evt.target.alt;

  modal.openModal(cardPopup);
}
