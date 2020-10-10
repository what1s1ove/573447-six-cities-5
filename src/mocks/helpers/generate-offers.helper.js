import {
  getRandomItem,
  getRandomItems,
  getRandomNumber,
  generateRandomId,
} from '~/helpers/helpers';
import {generateOfferLocation} from '~/mocks/helpers/generate-offer-location.helper';
import {generateUser} from '~/mocks/helpers/generate-user.helper';
import {OfferCity, OfferType} from '~/common/enums/enums';

const OfferConfig = {
  TITLES: [
    `Beautiful \u0026 luxurious apartment at great location`,
    `Wood and stone place`,
    `Canal View Prinsengracht`,
    `Nice, cozy, warm big bed apartment`,
  ],
  DESCRIPTIONS: [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.`,
    `Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. `,
    `Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus`,
    `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    `In rutrum ac purus sit amet tempus.`,
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
  IMG: {
    IMG_MIN_COUNT: 3,
    IMG_MAX_COUNT: 6,
    IMG_PATHS: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/room.jpg`,
    ],
  },
  BEDROOMS_COUNT: {
    MIN: 1,
    MAX: 3,
  },
  MAX_ADULTS_COUNT: {
    MIN: 1,
    MAX: 5,
  },
  GOODS: {
    GOODS: [
      `Wi-Fi`,
      `Heating`,
      `Kitchen`,
      `Fridge`,
      `Washing machine`,
      `Coffee machine`,
      `Dishwasher`,
      `Towels`,
      `Baby seat`,
      `Cabel TV`,
    ],
    MIN: 0,
  },
};

const cities = Object.values(OfferCity);
const offerTypes = Object.values(OfferType);

const generateOffer = () => ({
  id: generateRandomId(),
  city: getRandomItem(cities),
  type: getRandomItem(offerTypes),
  title: getRandomItem(OfferConfig.TITLES),
  rating: getRandomNumber(
      OfferConfig.RATING.MIN,
      OfferConfig.RATING.MAX,
      OfferConfig.RATING.FRACTIONAL_PART_COUNT
  ),
  description: getRandomItem(OfferConfig.DESCRIPTIONS),
  price: getRandomNumber(OfferConfig.PRICE.MIN, OfferConfig.PRICE.MAX),
  imagePreview: getRandomItem(OfferConfig.IMG.IMG_PATHS),
  images: getRandomItems(
      OfferConfig.IMG.IMG_PATHS,
      getRandomNumber(
          OfferConfig.IMG.IMG_MIN_COUNT,
          OfferConfig.IMG.IMG_MAX_COUNT
      )
  ),
  isPremium: Boolean(getRandomNumber(0, 1)),
  isFavorite: Boolean(getRandomNumber(0, 1)),
  bedroomCount: getRandomNumber(
      OfferConfig.BEDROOMS_COUNT.MIN,
      OfferConfig.BEDROOMS_COUNT.MAX
  ),
  maxAdultsCount: getRandomNumber(
      OfferConfig.MAX_ADULTS_COUNT.MIN,
      OfferConfig.MAX_ADULTS_COUNT.MAX
  ),
  location: generateOfferLocation(),
  goods: OfferConfig.GOODS.GOODS.slice(
      OfferConfig.GOODS.MIN,
      getRandomNumber(OfferConfig.GOODS.MIN, OfferConfig.GOODS.GOODS.length)
  ),
  host: generateUser(),
});

const generateOffers = (count) => {
  const offers = Array.from(new Array(count), generateOffer);

  return offers;
};

export {generateOffer, generateOffers};
