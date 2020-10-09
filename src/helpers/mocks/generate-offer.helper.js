import {getRandomItem} from '~/helpers/array/array';
import {generateRandomId} from '~/helpers/mocks/generate-random-id.helper';
import {OfferCity, OfferType} from '~/common/enums/enums';

const TITLES = [
  `Beautiful \u0026 luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
];

const cities = Object.values(OfferCity);
const offerTypes = Object.values(OfferType);

const generateOffer = () => ({
  id: generateRandomId(),
  city: getRandomItem(cities),
  type: getRandomItem(offerTypes),
  title: getRandomItem(TITLES),
});

export {generateOffer};
