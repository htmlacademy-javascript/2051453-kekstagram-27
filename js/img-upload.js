// Поиск <input> в блоке с закгрузкой файла
const uploadBox = document.querySelector('.img-upload__overlay');
const uploadInput = document.querySelector('.img-upload__input');
const closeModalUploadElement = document.querySelector('.img-upload__cancel');
const uploadText = document.querySelector('.img-upload__text');
const uploadTextArea = uploadText.querySelector('.text__description');


// Событие удаления модального кона через keydown = ESC

const onPopupEscDown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeUserModal();
  }
};

// Функция открытия модального окна

function openUserModal () {
  uploadBox.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscDown);
}

// Функция закрытия модального окна

function closeUserModal () {
  uploadBox.classList.add('hidden');
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
  if (evt.key === 'Escape' && uploadTextArea.activeElement) {
    closeUserModal();
  }
});
