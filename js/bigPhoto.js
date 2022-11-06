// Объявление переменных

const commentLoader = document.querySelector('.comments-loader');
const commentCounter = document.querySelector('.social__commnet-count');
const commnetTemplate = document.querySelector('.social__comment');
const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const body = document.querySelector('body');

// Функция удаления попапа

const closePopup = function (evt) {
  if (evt.key === 'Escape') {
    bigPicture.classList.add('.hidden');
    body.classList.remove('.modal-open');

    // Выход из полной прослушки
    document.removeEventListener('keydown', closePopup);
  }
};

// Функция добавление в DOM комментария

const createComment = function (comment, template) {
  const newComment = template.cloneNode(true);
  const avatar = newComment.querySelector('.social__picture');
  avatar.src = comment.avatar;
  avatar.alt = comment.name;
  newComment.querySelector('.social__text').textContent = comment.message;

  return newComment;
}

// Функция создания комментария

const addPictureEvenHandler = function (picture, pictureData) {
  picture.addEventListener('click', function () {
    bigPicture.classList.remove('hidden');  // Удаляем класс чтобы открылся попап
    bigPicture.querySelector('.big-picture__img').querySelector('img').src = pictureData.url;
    bigPicture.querySelector('.likes-count').textContent = pictureData.likes;
    bigPicture.querySelector('.social__caption').textContent = pictureData.description;
    bigPicture.querySelector('.comments-count').textContent = pictureData.comments.length;

    // Работа с комментариями
    const comments = bigPicture.querySelector('.social__comments');

    // Чистим содержимое
    comments.innerHTML = '';

    // Метод для добавления элементов в DOM
    pictureData.comments.forEach(comment => {
      comments.appendChild(createComment(comment, commnetTemplate))
    });

    // Скрываем попап
    commentCounter.classList.add('hidden');
    commentLoader.classList.add('hidden');
    document.body.classList.add('modal-open');

    document.addEventListener('keydown', closePopup)

  })
};

// Событие - закрытие попапа

closeButton.addEventListener('click', function () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
});

export { addPictureEvenHandler }
