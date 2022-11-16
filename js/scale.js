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

export {resetScale};
