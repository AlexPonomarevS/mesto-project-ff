function closePopupESC(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");
    closeModal(openedPopup);
  }
}

function closePopupOverlay(evt) {
  if (!evt.target.classList.contains(".popup_is-opened")) {
    closeModal(evt.target);
  }
}

export function openModal(popup) {
  popup.classList.add("popup_is-animated");

  setTimeout(() => {
    popup.classList.add("popup_is-opened");
  }, 0);

  document.addEventListener("keydown", closePopupESC);
  document.addEventListener("mousedown", closePopupOverlay);
}

export function closeModal(popup) {
  popup.classList.remove("popup_is-opened");

  document.removeEventListener("keydown", closePopupESC);
  document.removeEventListener("mousedown", closePopupOverlay);
}
