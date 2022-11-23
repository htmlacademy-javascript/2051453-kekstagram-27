import { sortingDiscussed, getRandomArray } from './utils.js';

// Поиск кнопок
const filterForm = document.querySelector('.img-filters');

// Константа для случайных фоток
const RANDOM_DEFAULT = 10;

// Сб для выбора фильтра
const toggleFilter = (button) => {
  const currentFilter = document.querySelector('.img-filters__button--active');
  currentFilter.classList.remove('img-filters__button--active');
  button.classList.add('img-filters__button--active');
};

// Сб прослушки для выбора фильтра
const setFilterClick = (data, cb) => {
  filterForm.addEventListener('click', (evt) => {
    switch (evt.target.id) {
      case 'filter-random':
        toggleFilter(evt.target);
        cb(getRandomArray(data, RANDOM_DEFAULT));
        break;

      case 'filter-discussed':
        toggleFilter(evt.target);
        cb(sortingDiscussed(data));
        break;

      case 'filter-default':
        toggleFilter(evt.target);
        cb(data);
        break;
    }
  });
};

export {setFilterClick};
