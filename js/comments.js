import { isEscapeKey } from './utils.js';

// Функция показа комментария
const showMessage = (message, button) => {
  document.body.append(message);

  const close = () => {
    message.remove();
    window.removeEventListener('keydown', onMessageEscDown);
  };

  button.addEventListener('click', () => {
    close();
  });

  message.addEventListener('click', (evt) => {
    if (evt.target === message) {
      close();
    }
  });

  function onMessageEscDown(evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      close();
    }
  }
  window.addEventListener('keydown', onMessageEscDown);
};

// НАДО УБРАТЬ ОБРАБОТЧИК ECS У МОДАЛКИ И ОСТАВИТЬ У ОШИБКИ
// ЕСЛИ ОШИБКУ УБИРАЕМ ОБРАБОТЧИК НА ESC СНОВА ВЕШАЕМ
const showErrorMessage = (message, button) => {
  document.body.append(message);
  const close = () => {
    message.remove();
    window.removeEventListener('keydown', onMessageEscDown);
  };

  button.addEventListener('click', () => {
    close();
  });

  message.addEventListener('click', (evt) => {
    if (evt.target === message) {
      close();
    }
  });

  function onMessageEscDown(evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      close();
    }
  }
  window.addEventListener('keydown', onMessageEscDown);
};

const showSuccessMessage = () => {
  const message = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
  const button = message.querySelector('.success__button');
  showMessage(message, button);
};

const showUploadErrorMessage = () => {
  const message = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
  const button = message.querySelector('.error__button');
  showErrorMessage(message, button);
};

export {
  showSuccessMessage,
  showUploadErrorMessage
};
