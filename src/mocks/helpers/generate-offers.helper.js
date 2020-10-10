import {getRandomItem, getRandomNumber, generateRandomId} from '~/helpers/helpers';
import {OfferCity, OfferType} from '~/common/enums/enums';

const OfferConfig = {
  TITLES: [
    `Beautiful \u0026 luxurious apartment at great location`,
    `Wood and stone place`,
    `Canal View Prinsengracht`,
    `Nice, cozy, warm big bed apartment`,
  ],
  PRICE: {
    MIN: 50,
    MAX: 250,
  },
  RATING: {
    MIN: 0,
    MAX: 5,
    FRACTIONAL_PART_COUNT: 1,
  },
};

const cities = Object.values(OfferCity);
const offerTypes = Object.values(OfferType);

const generateOffer = () => ({
  id: generateRandomId(),
  city: getRandomItem(cities),
  type: getRandomItem(offerTypes),
  title: getRandomItem(OfferConfig.TITLES),
  price: getRandomNumber(OfferConfig.PRICE.MIN, OfferConfig.PRICE.MAX),
  rating: getRandomNumber(
      OfferConfig.RATING.MIN,
      OfferConfig.RATING.MAX,
      OfferConfig.RATING.FRACTIONAL_PART_COUNT
  ),
});

const generateOffers = (count) => {
  const offers = Array.from(new Array(count), generateOffer);

  return offers;
};

export {generateOffer, generateOffers};