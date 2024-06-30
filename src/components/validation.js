function showInputError(
  popupElement,
  inputElement,
  validationConfig,
  errorMessage
) {
  const inputError = popupElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validationConfig.inputErrorClass);
  inputError.textContent = errorMessage;
  inputError.classList.add(validationConfig.errorClass);
}

function hideInputError(popupElement, inputElement, validationConfig) {
  const inputError = popupElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validationConfig.inputErrorClass);
  inputError.classList.remove(validationConfig.errorClass);
  inputError.textContent = "";
}

function isValid(popupElement, inputElement, validationConfig) {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity("");
  }

  if (!inputElement.validity.valid) {
    showInputError(
      popupElement,
      inputElement,
      validationConfig,
      inputElement.validationMessage
    );
  } else {
    hideInputError(popupElement, inputElement, validationConfig);
  }
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => !inputElement.validity.valid);
}

function toggleButtonState(inputList, submitButton, validationConfig) {
  if (hasInvalidInput(inputList)) {
    submitButton.classList.add(validationConfig.inactiveButtonClass);
    submitButton.disabled = true;
  } else {
    submitButton.classList.remove(validationConfig.inactiveButtonClass);
    submitButton.disabled = false;
  }
}

function setEventListeners(popupElement, validationConfig) {
  const inputList = Array.from(
    popupElement.querySelectorAll(validationConfig.inputSelector)
  );
  const submitButton = popupElement.querySelector(
    validationConfig.submitButtonSelector
  );

  toggleButtonState(inputList, submitButton, validationConfig);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      isValid(popupElement, inputElement, validationConfig);
      toggleButtonState(inputList, submitButton, validationConfig);
    });
  });
}

export function enableValidation(validationConfig) {
  const popupList = Array.from(
    document.querySelectorAll(validationConfig.formSelector)
  );
  popupList.forEach((popupElement) => {
    setEventListeners(popupElement, validationConfig);
  });
}

export function clearValidation(formElement, validationConfig) {
  const inputList = Array.from(
    formElement.querySelectorAll(validationConfig.inputSelector)
  );
  const submitButton = formElement.querySelector(
    validationConfig.submitButtonSelector
  );

  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, validationConfig);
  });

  toggleButtonState(inputList, submitButton, validationConfig);
}
