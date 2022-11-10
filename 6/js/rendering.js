import { photos } from './data.js';
import { addPictureEvenHandler } from './big-photo.js';

// Константы
const picture = document.querySelector('.pictures');
// Поиск шаблона
const templatePictures = document.querySelector('#picture').content;
const template = templatePictures.querySelector('.picture');
// Создание шаблона
const newFragment = document.createDocumentFragment();

// Функция клонирование в DOM элемента
const renderPhoto = (photo) => {
  // Локальная переменная для клоинрования из шаблона
  const item = template.cloneNode(true);

  // Переменные для хранения данных внутри шаблона
  const img = item.querySelector('.picture__img');
  const likes = item.querySelector('.picture__likes');
  const comments = item.querySelector('.picture__comments');

  // Запись атрибутов
  comments.textContent = photo.comments.length;
  img.src = photo.url;
  likes.textContent = photo.likes;

  addPictureEvenHandler(item, photo);
  return item;
};

// Функция добавление элемента в DOM
const getPhoto = function () {
  photos.forEach((photo) => {
    newFragment.appendChild(renderPhoto(photo));
  });

  picture.appendChild(newFragment);
};

getPhoto();
