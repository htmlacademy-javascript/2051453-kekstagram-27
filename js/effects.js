// Найдем элементы DOM
const image = document.querySelector('.img-upload__preview img');
const form = document.querySelector('.img-upload__form');
const sliderElement = document.querySelector('.effect-level__slider');
const effectLevel = document.querySelector('.effect-level__value');

// Записываем в объекты параметры эффектов

const EFFECTS = [
  {
    name: 'none',
    min: 0,
    max: 100,
    step: 1
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
];

// Записываем значение по умолчанию это без эффектов
const DEFAULT_EFFECT = EFFECTS[0];
// Записываем изменяемое значение переменной для выбора разных эффектов
let chosenEffect = DEFAULT_EFFECT;

// Записываем функция возращающую к начальному эффекту
const isDefault = () => chosenEffect === DEFAULT_EFFECT;

// Функция работы со слайдером
const updateSlider = () => {
  sliderElement.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    step: chosenEffect.step,
    start: chosenEffect.max,
  });

  if (isDefault()) {
    sliderElement.classList.add('hidden');
  }
};

// Колбэк для нажатия на радио-кнопку
const onFormChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value); // Находит первый элемент удовлетворяющий условию
  updateSlider();
};

// Колбэк для слайдера
const onSliderUpdate = () => {
  image.style.filter = 'none';
  image.className = '';
  effectLevel.value = '';
  if (isDefault()) {
    return;
  }
  const sliderValue = sliderElement.noUiSlider.get();
  image.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  image.classList.add(`effects__preview--${chosenEffect.name}`);
  effectLevel.value = sliderValue;
};

// Функция сброса эффектов
const resetEffects = () => {
  chosenEffect = DEFAULT_EFFECT;
  updateSlider();
};

// Создание слайдера
noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max:DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});
updateSlider();

//
form.addEventListener('change', onFormChange);
sliderElement.noUiSlider.on('update', onSliderUpdate);

export {resetEffects};


