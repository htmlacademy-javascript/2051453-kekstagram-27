function checkStringLength(string, length) {
  return string.length <= length;
}

function getRandomPositiveInteger(a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function createName() {
  const Names = [
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
  const name = Names[getRandomPositiveInteger(0, Names.length - 1)];
  return name;
}

function createMessage() {
  const Messages = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];
  const message = Messages[getRandomPositiveInteger(0, Messages.length - 1)];
  return message;
}

function createDescription() {
  const Descriptions = [
    'Красивая фотография',
    'Хорошее качество',
    'Прикольный дизайн',
    'Обычная картинка',
    'Много цветов',
  ]
  const description = Descriptions[getRandomPositiveInteger(0, Descriptions.length - 1)];
  return description;
}

function createComments() {
  const idRandom = getRandomPositiveInteger(0, 1000);
  const idAvatar = getRandomPositiveInteger(1, 6);
  return {
    id: idRandom,
    avatar: 'img/avatar-' + idAvatar + '.svg',
    message: createMessage(),
    name: createName()
  };
}


function createInfo() {
  return {
    id: getRandomPositiveInteger(1, 25),
    url: `photos/${getRandomPositiveInteger(1, 6)}.jpg`,
    description: createDescription(),
    likes: getRandomPositiveInteger(15, 200),
    comments: createComments(),
  };
}

function createData(number) {
  for (let i = 1; i <= number; i++) {
    createInfo();
    console.log(createInfo());
  }
}

console.log(createData(55));
