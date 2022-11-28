export const FILE_TYPES = ['jpg', 'jpeg', 'png'];
// Сб для вывода модальног окна после отпраки данных
const showErrorAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.position = 'absolute';
  alertContainer.style.width = '100%';
  alertContainer.style.top = '0';
  alertContainer.style.padding = '10px 5px';
  alertContainer.style.fontSize = '22px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'Crimson';

  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 5000);
};

// Функция вывода рандомного числа
const getRandomPositiveNumber = (min,max) => {
  if(min < 0 || max < 0 || max <= min){
    return NaN;
  }
  return Math.floor(min + Math.random() * (max + 1 - min));
};

// Функция устранения дребезга
const debounce = (cb,timeoutDelay = 500) => {
  let timeoutId;
  return(...rest) => {
    clearInterval(timeoutId);
    timeoutId = setTimeout(() => cb.apply(this,rest),timeoutDelay);
  };
};

// Функция разницы количества строк комментариев
const comparePhotos = (photoA, photoB) => photoB.comments.length - photoA.comments.length;

// Функция сортировки обсуждаемых фото
const sortingDiscussed = (photos) => photos.slice().sort(comparePhotos);

// Фукнция получения рандомного элемента массива
const getRandomElementArray = (array) => array[getRandomPositiveNumber(0, array.length - 1)];

// Функция проверки строки
const checkStringLength = (string,length) => string.length <= length;

// Функция сб нажатия на ESC
const isEscapeKey = (evt) => evt.key === 'Escape';

// Функция получения рандомного массива
const getRandomArray = (array, countElement) => {
  if (array.length <= countElement){
    return array;
  }
  let resultArray = [];
  while (resultArray.length !== countElement){
    resultArray.push(getRandomElementArray(array));
    resultArray = Array.from(new Set(resultArray));
  }
  return resultArray;
};

export {
  checkStringLength,
  isEscapeKey,
  debounce,
  showErrorAlert,
  sortingDiscussed,
  getRandomArray
};
