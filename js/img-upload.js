// импорт библиотеки, полей ввода и формы найденных по DOM
import {pristine} from './validation.js';
import {hashtagField} from './validation.js';
import {uploadTextArea} from './validation.js';
import {uploadForm} from './validation.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';

// Поиск элемнтов модального окна редактирования картинки
const uploadBox = document.querySelector('.img-upload__overlay');
const uploadInput = document.querySelector('.img-upload__input');
const closeModalUploadElement = document.querySelector('.img-upload__cancel');

// Функция проверки активного элемента DOM, то есть на нём фокус браузера
const isTextFieldFocused = () => document.activeElement === hashtagField || document.activeElement === uploadTextArea;

// Функция удаления модального кона через keydown = ESC
const onPopupEscDown = (evt) => {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    closeUserModal();
  }
};

// Функция открытия модального окна
function openUserModal () {
  uploadForm.reset();
  pristine.reset();
  resetScale();
  resetEffects();
  uploadBox.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscDown);
}

// Функция закрытия модального окна
function closeUserModal () {
  uploadBox.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscDown);
}

// Событие открытия модального окна для закгрузки картинки
uploadInput.addEventListener('change', () => {
  openUserModal();
});

// Событие закрытие модального окна
closeModalUploadElement.addEventListener('click', () => {
  closeUserModal();
});

// Событие закрытия модального окна через кнопку ESC
closeModalUploadElement.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    closeUserModal();
  }
});
