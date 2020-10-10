import {getRandomNumber, getRandomItem} from '~/helpers/helpers';

const OfferHostConfig = {
  NAMES: [`Angelina`, `Max`, `Oliver`],
  IMG_PATHS: [`img/avatar-angelina.jpg`, `img/avatar-max.jpg`],
};

const generateHost = () => ({
  name: getRandomItem(OfferHostConfig.NAMES),
  avatarUrl: getRandomItem(OfferHostConfig.IMG_PATHS),
  isPro: Boolean(getRandomNumber(0, 1)),
});

export {generateHost};
