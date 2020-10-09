import {getRandomItem} from '~/helpers/array/array';
import {getRandomNumber} from '~/helpers/number/number';
import {generateRandomId} from '~/helpers/mocks/generate-random-id.helper';
import {OfferCity, OfferType} from '~/common/enums/enums';

const TITLES = [
  `Beautiful \u0026 luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
];

const OfferConfig = {
  PRICE: {
    MIN: 50,
    MAX: 250,
  },
};

const cities = Object.values(OfferCity);
const offerTypes = Object.values(OfferType);

const generateOffer = () => ({
  id: generateRandomId(),
  city: getRandomItem(cities),
  type: getRandomItem(offerTypes),
  title: getRandomItem(TITLES),
  price: getRandomNumber(OfferConfig.PRICE.MIN, OfferConfig.PRICE.MAX),
});

export {generateOffer};
