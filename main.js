(()=>{"use strict";function e(e){"Escape"===e.key&&r(document.querySelector(".popup_is-opened"))}function t(e){e.target.classList.contains(".popup_is-opened")||r(e.target)}function n(n){n.classList.add("popup_is-animated"),setTimeout((function(){n.classList.add("popup_is-opened")}),0),document.addEventListener("keydown",e),document.addEventListener("mousedown",t)}function r(n){n.classList.remove("popup_is-opened"),document.removeEventListener("keydown",e),document.removeEventListener("mousedown",t)}var o={baseUrl:"https://nomoreparties.co/v1/wff-cohort-16",headers:{authorization:"245a4461-ed71-4ff7-a43a-f244b60dd9e9","Content-Type":"application/json"}};function c(e){return fetch("".concat(o.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:o.headers}).then((function(e){if(!e.ok)throw new Error("Ошибка ".concat(e.status));return e.json()}))}function a(e){return fetch("".concat(o.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:o.headers}).then((function(e){if(!e.ok)throw new Error("Ошибка ".concat(e.status));return e.json()}))}var u=document.querySelector("#card-template").content,i=document.querySelector(".places__list"),s=document.querySelector(".popup_type_image"),l=document.querySelector(".popup__image"),d=document.querySelector(".popup__caption");function f(e,t,n,r,o,c,a,i,s){var l=u.querySelector(".card").cloneNode(!0),d=l.querySelector(".card__title"),f=l.querySelector(".card__image"),p=l.querySelector(".card__like-counter");p.textContent=c.length,d.textContent=e,f.src=t,f.alt=e;var m=l.querySelector(".card__like-button");m.addEventListener("click",(function(e){r(m,i,p)}));var v=l.querySelector(".card__delete-button");return v.addEventListener("click",(function(e){n(l,i)})),s!==a&&(v.disabled=!0,v.style.display="none"),c.some((function(e){return e._id===a}))&&m.classList.add("card__like-button_is-active"),f.addEventListener("click",o),l}function p(e,t){var n=document.querySelector(".popup_is-opened");(function(e){return fetch("".concat(o.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:o.headers}).then((function(e){if(!e.ok)throw new Error("Ошибка ".concat(e.status));return e.json()}))})(t).then((function(){e.remove(),r(n)}))}function m(e,t,n){(e.classList.contains("card__like-button_is-active")?a:c)(t).then((function(t){n.textContent=t.likes.length,e.classList.toggle("card__like-button_is-active")})).catch((function(e){console.log(e)}))}function v(e){l.alt=e.target.alt,l.src=e.target.src,d.textContent=e.target.alt,n(s)}function y(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""}function _(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButtonClass),t.disabled=!1):(t.classList.add(n.inactiveButtonClass),t.disabled=!0)}function h(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){y(e,n,t)})),_(n,r,t)}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var S,E=document.querySelector(".profile__edit-button"),k=document.querySelector(".profile__add-button"),q=document.querySelector(".profile__avatar-button"),L=document.querySelector(".popup_type_edit"),w=document.querySelector(".popup_type_new-card"),g=document.querySelector(".popup_type_avatar"),C=document.querySelectorAll(".popup__close"),A=document.querySelector(".profile__title"),x=document.querySelector(".profile__description"),j=document.querySelector(".profile__image"),U=document.forms["edit-avatar"],T=U.elements.avatar,O=document.forms["edit-profile"],B=O.elements.name,D=O.elements.description;q.addEventListener("click",(function(){n(g),T.value="",h(U,N)})),O.addEventListener("submit",(function(e){e.preventDefault();var t,n,c,a=document.querySelector(".popup_is-opened");J(!0,a),(t={name:B.value,about:D.value},n=t.name,c=t.about,fetch("".concat(o.baseUrl,"/users/me"),{method:"PATCH",headers:o.headers,body:JSON.stringify({name:n,about:c})}).then((function(e){if(!e.ok)throw new Error("Ошибка ".concat(e.status));return e.json()}))).then((function(){A.textContent=B.value,x.textContent=D.value,r(L)})).catch((function(e){console.error("Произошла ошибка:",e)})).finally((function(){J(!1,a)}))})),E.addEventListener("click",(function(){B.value=A.textContent,D.value=x.textContent,n(L),h(O,N)}));var P=document.forms["new-place"],I=P.elements["place-name"],M=P.elements.link;P.addEventListener("submit",(function(e){e.preventDefault();var t,n,c,a=document.querySelector(".popup_is-opened");J(!0,a),(t={name:I.value,link:M.value},n=t.name,c=t.link,fetch("".concat(o.baseUrl,"/cards"),{method:"POST",headers:o.headers,body:JSON.stringify({name:n,link:c})}).then((function(e){if(!e.ok)throw new Error("Ошибка ".concat(e.status));return e.json()}))).then((function(e){i.prepend(f(e.name,e.link,p,m,v,e.likes,S,e._id,e.owner._id))})).then((function(){r(w)})).catch((function(e){console.error("Произошла ошибка:",e)})).finally((function(){J(!1,a)})),P.reset()})),k.addEventListener("click",(function(){n(w),h(P,N)})),C.forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){return r(t)}))}));var N={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function J(e,t){t.querySelector(".popup__button").textContent=e?"Сохранение...":"Сохранить"}window.addEventListener("load",(function(){!function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);_(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?y(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n.inputErrorClass),o.textContent=r,o.classList.add(n.errorClass)}(e,t,n,t.validationMessage)}(e,o,t),_(n,r,t)}))}))}(t,e)}))}(N)})),Promise.all([fetch("".concat(o.baseUrl,"/users/me"),{headers:o.headers}).then((function(e){if(!e.ok)throw new Error("Ошибка ".concat(e.status));return e.json()})),fetch("".concat(o.baseUrl,"/cards"),{headers:o.headers}).then((function(e){if(!e.ok)throw new Error("Ошибка ".concat(e.status));return e.json()}))]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,s=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){s=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];x.textContent=o.about,A.textContent=o.name,j.style="background-image: url('".concat(o.avatar,"')"),S=o._id,c.forEach((function(e){i.append(f(e.name,e.link,p,m,v,e.likes,S,e._id,e.owner._id))}))})).catch((function(e){console.error("Произошла ошибка:",e)})),U.addEventListener("submit",(function(e){e.preventDefault();var t,n=document.querySelector(".popup_is-opened");J(!0,n),(t=T.value,fetch("".concat(o.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:o.headers,body:JSON.stringify({avatar:t})}).then((function(e){if(!e.ok)throw new Error("Ошибка ".concat(e.status));return e.json()}))).then((function(e){userAvatar.style.backgroundImage="url('".concat(e.avatar,"')"),r(g)})).catch((function(e){console.error("Произошла ошибка:",e)})).finally((function(){J(!1,n)}))}))})();