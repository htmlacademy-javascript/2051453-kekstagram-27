// Объявление констант массивов

const NAMES = [
  'Олег',
  'Руслан',
  'Игорь',
  'Артем',
  'Петр',
  'Вячеслав',
  'Станислав',
  'Виктор',
  'Владислав',
  'Артур',
  'Даниил',
  'Сергей',
  'Матвей',
  'Кирилл',
  'Денис',
  'Карэн'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
]

const DESCRIPTIONS = [
  'Красивая фотография',
  'Хорошее качество',
  'Прикольный дизайн',
  'Обычная картинка',
  'Много цветов',
]

// Проверка длины строки

function checkStringLength(string, length) {
  return string.length <= length;
}

// Создание рандомного числа

function getRandomPositiveInteger(a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

// Создание рандомного ключа блока

function createKey(array) {
  return array[getRandomPositiveInteger(0, array.length - 1)];
}

// Созадние комментария к объекту из 4 ключей

function createComments() {
  return [{
    id: getRandomPositiveInteger(0, 1000),
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: createKey(MESSAGES),
    name: createKey(NAMES)
  }];
}

// Создание полного объекта пользователя

function createInfo(number) {
  return {
    id: number,
    url: `photos/${number}.jpg`,
    description: createKey(DESCRIPTIONS),
    likes: getRandomPositiveInteger(15, 200),
    comments: createComments(),
  };
}

function createData() {
  const photos = [];
  for (let i = 1; i <= 25; i++) {
    photos.push(createInfo(i));
  }

  return photos;
}

console.log(createData())
