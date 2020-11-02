import {getRandomNumber, getRandomItem, generateRandomId} from '~/helpers/helpers';

const UserConfig = {
  NAMES: [`Angelina`, `Max`, `Oliver`],
  IMG_PATHS: [`img/avatar-angelina.jpg`, `img/avatar-max.jpg`],
};

const generateUser = () => ({
  id: generateRandomId(),
  name: getRandomItem(UserConfig.NAMES),
  avatarUrl: getRandomItem(UserConfig.IMG_PATHS),
  isPro: Boolean(getRandomNumber(0, 1)),
});

export {generateUser};
