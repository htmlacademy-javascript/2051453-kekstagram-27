import { renderMiniPhotos } from './thumbnail.js';
import './big-photo.js';
import './user-form.js';
import './scale.js';
import './effects.js';
import { getData } from './api.js';
import { showErrorAlert, debounce } from './utils.js';
import { setFilterClick } from './filters.js';

getData((data) => {
  renderMiniPhotos(data);
  setFilterClick(data, debounce(renderMiniPhotos, 500));
},
() => {
  showErrorAlert('Не удалось загрузить изображения.');
}
);
