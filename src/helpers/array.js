import {getRandomNumber} from '~/helpers/number';

const getRandomItem = (items) => {
  const randomIdx = getRandomNumber(0, items.length - 1);

  const randomItem = items[randomIdx];

  return randomItem;
};

const getRandomItems = (items, count) => {
  const randomItems = Array.from(new Array(count), () => getRandomItem(items));

  return randomItems;
};

export {getRandomItem, getRandomItems};
