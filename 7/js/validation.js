// Импорт найденной формы по DOM и импорт функции проверки строки

import { checkStringLength } from './utils.js';

// Поиск формы и двух полей

const uploadForm = document.querySelector('.img-upload__form');
const uploadText = document.querySelector('.img-upload__text');
const uploadTextArea = uploadText.querySelector('.text__description');
const hashtagField = uploadText.querySelector('.text__hashtags');

// Константы для поле с хэштегом

const HASHTAG_CORRECT = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_HASHTAG_COUNT = 5;

// Ввод библиотеки Pristine

const pristine = new Pristine(
  uploadForm, {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextClass: 'img-upload__field-wrapper__error',
  }
);

// Функция проверки хэштега на регулярку

function isValidTag (tag) {
  return HASHTAG_CORRECT.test(tag); // вернет true/false
}

// Функция проверки количества хэштегов

function hasValidCount (tags) {
  return tags.length <= MAX_HASHTAG_COUNT;
}

// Проверка на совпадения тэгов с коллекцией

const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

// Проверка на все условия введения хэштэгов, чтобы добавить ее после в Pristine.validator
const validateTags = (value) => {
  const tags = value.trim().split(' ').filter((tag) => tag.trim().length);
  return hasValidCount(tags) && hasUniqueTags && tags.every(isValidTag);
};

// Проверка на количество строк для поля комментариев

const validateArea = (value) => checkStringLength(value);

// Добавление валидатора для хэштегов

pristine.addValidator(
  hashtagField,
  validateTags,
  'Неправильно заполнены хэштеги'
);

// Добавление валидатора для текстового поля

pristine.addValidator(
  uploadTextArea,
  validateArea,
  'Превышено количество символов'
);

// callBack для события отправки формы

const onFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

// Событие отправки фомры

uploadForm.addEventListener('submit', onFormSubmit);

export { pristine };
export { hashtagField };
export { uploadTextArea };
export { uploadForm };
