import { checkStringLength } from './utils.js';

// Поиск <input> в блоке с закгрузкой файла
const uploadBox = document.querySelector('.img-upload__overlay');
const uploadInput = document.querySelector('.img-upload__input');
const closeModalUploadElement = document.querySelector('.img-upload__cancel');
const uploadText = document.querySelector('.img-upload__text');
const uploadTextArea = uploadText.querySelector('.text__description');
const hashtagField = uploadText.querySelector('.text__hashtags');
const uploadForm = document.querySelector('.img-upload__form');
// const

const HASHTAG_CORRECT = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_HASHTAG_COUNT = 5;

// Ввод Pristine

const pristine = new Pristine(
  uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
}
);

const pristineTextArea = new Pristine(
  uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
}
);

// Функция проверки активного элемента DOM

const isTextFieldFocused = () =>
  document.activeElement === hashtagField ||
  document.activeElement === uploadTextArea;

// Событие удаления модального кона через keydown = ESC

const onPopupEscDown = (evt) => {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    closeUserModal();
  }
};

// Функция открытия модального окна

function openUserModal() {
  uploadForm.reset();
  pristine.reset();
  uploadBox.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscDown);
}

// Функция закрытия модального окна

function closeUserModal() {
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

closeModalUploadElement.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    closeUserModal();
  }
});

// Валидация формы загрузки файла


uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

// Функция проверки хэштега на регулярку

function isValidTag(tag) {
  return HASHTAG_CORRECT.test(tag); // вернет true/false
}

// Функция проверки количества хэштегов

function hasValidCount(tags) {
  return tags.length <= MAX_HASHTAG_COUNT;
}

// Методы .reset(), .map(), .toLowerCase(), .trim(), .split(' '), .filter()

// Проверка на совпадения тэгов с коллекцией

const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

// Проверка
const validateTags = (value) => {
  const tags = value.trim().split(' ').filter((tag) => tag.trim().length);
  return hasValidCount(tags) && hasUniqueTags && tags.every(isValidTag);
};

const validateArea = (value) => checkStringLength(value);
// Добавление валидатора для хэштегов

pristine.addValidator(
  hashtagField,
  validateTags,
  'Неправильно заполнены хэштеги'
);

// Добавление валидатора для текстового поля

pristineTextArea.addValidator(
  uploadTextArea,
  validateArea,
  'Превышено количество символов'
);

const onFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
  pristineTextArea.validate();
};

uploadForm.addEventListener('submit', onFormSubmit);

