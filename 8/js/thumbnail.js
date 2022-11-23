import { renderBigPhoto } from './big-photo.js';

const pictureContainers = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const imageFilters = document.querySelector('.img-filters');

// Функция очистки фоток
const clearPhoto = () => {
  const pictures = document.querySelectorAll('.picture');
  if (pictures.length > 0) {
    pictures.forEach((picture) => picture.remove());
  }
};

// Функция визуализации маленьких фоток
const renderMiniPhotos = (thumbnails) => {
  const pictureListFragment = document.createDocumentFragment();
  clearPhoto();

  // Для каждых фоток
  thumbnails.forEach(({ url, likes, comments, description }) => {
    const thumbnailsPicture = pictureTemplate.cloneNode(true);
    thumbnailsPicture.querySelector('.picture__img').src = url;
    thumbnailsPicture.querySelector('.picture__likes').textContent = likes;
    thumbnailsPicture.querySelector('.picture__comments').textContent = comments.length;

    // События на коммент
    thumbnailsPicture.querySelector('.picture__img').addEventListener('click', () => {
      renderBigPhoto({ url, likes, comments, description });
    });
    pictureListFragment.appendChild(thumbnailsPicture);
  });
  pictureContainers.appendChild(pictureListFragment);
  imageFilters.classList.remove('img-filters--inactive');
};

export { renderMiniPhotos };
