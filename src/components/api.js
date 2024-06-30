export const config = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-16",
  headers: {
    authorization: "245a4461-ed71-4ff7-a43a-f244b60dd9e9",
    "Content-Type": "application/json",
  },
};

const handleResponse = (res) => {
  if (!res.ok) {
    throw new Error(`Ошибка ${res.status}`);
  }

  return res.json();
};

export function getUserInfo() {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  }).then(handleResponse);
}

export function getInitialCards() {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  }).then(handleResponse);
}

export function addLike(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
  }).then(handleResponse);
}

export function deleteLike(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(handleResponse);
}

export function deleteCard(cardId) {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(handleResponse);
}

export function editAvatar(avatar) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatar,
    }),
  }).then(handleResponse);
}

export function newCard({ name, link }) {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  }).then(handleResponse);
}

export function editProfileInfo({ name, about }) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about,
    }),
  }).then(handleResponse);
}
