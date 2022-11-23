<<<<<<< Updated upstream
// Находим переменные для кнопок увеличения, уменьшения, текстового поля и картинки

const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview img');

// Константы для шага, максимального и минимального значения, для дефолтного

const DEFAULT_SCALE = 100;
const MAX_SCALE = 100;
const MIN_SCALE = 25;
const STEP_SCALE = 25;

// функция записи нового значение в стили и в поле
const scaleImage = (value = DEFAULT_SCALE) => {
  image.style.transform = `scale(${value / 100})`;
  scaleInput.value = `${value}%`;
};

// callback для события уменьшения размера по клику
const onSmallerButtonClick = () => {
  const currentValue = parseInt(scaleInput.value, 10);
  let newValue = currentValue - STEP_SCALE;
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  scaleImage(newValue);
};

// callback для события увеличения размера по клику
const onBiggerButtonClick = () => {
  const currentValue = parseInt(scaleInput.value, 10);
  let newValue = currentValue + STEP_SCALE;
  if (newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  scaleImage(newValue);
};

// Сброс scale функцииm, чтобы сборосить машстабирование фотографии

const resetScale = () => {
  scaleImage();
};

smallerButton.addEventListener('click', onSmallerButtonClick);
biggerButton.addEventListener('click', onBiggerButtonClick);
=======
// Поиск по DOM
const scaleField = document.querySelector('.img-upload__scale');
const photoPreview = document.querySelector('.img-upload__preview img');
const scaleValue = document.querySelector('.scale__control--value');

const biggerButton = scaleField.querySelector('.scale__control--bigger');
const smallerButton = scaleField.querySelector('.scale__control--smaller');

let valueScale = parseInt(scaleValue, Number);
// Базовые параметры
const PARAMETRS_SCALE = {
  min: 25,
  max: 100,
  step: 25,
  start: 100
};

// сб-Функция сброса масштаба фото
const resetScale = () => {
  scaleValue.value = `${PARAMETRS_SCALE.start}%`;
  photoPreview.style.transform = `scale(${scaleValue.value})`;
};

// сб-Функция увеличения масштаба
const onPlusButton = () => {
  if (valueScale < PARAMETRS_SCALE.max){
    photoPreview.style.transform = `scale(${valueScale += PARAMETRS_SCALE.step})`;
    scaleValue.value = `${valueScale}%`;
  }
};

// сб-Функция уменьшения масштаба
const onMinusButton = () => {
  if (valueScale > PARAMETRS_SCALE.max){
    photoPreview.style.transform = `scale(${valueScale -= PARAMETRS_SCALE.step})`;
    scaleValue.value = `${valueScale}%`;
  }
};

// Прослушка событий
scaleField.addEventListener('click', (evt) => {
  if (evt.target === biggerButton){
    onPlusButton();
  }
  if (evt.target === smallerButton){
    onMinusButton();
  }
});
>>>>>>> Stashed changes

export {resetScale};
