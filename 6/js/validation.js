const uploadForm = document.querySelector('.img-upload__form');
const hashtag = /^#[a-zа-яё0-9]{1,19}$/i;

const pristine = new Pristine(uploadForm, {
});

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

pristine.addValidator(uploadForm.querySelector('.text__hashtags'),
  validateHashtags,
  'От 1 до 19 символов'
);

function validateHashtags(value) {
  return hashtag.test(value);
}
