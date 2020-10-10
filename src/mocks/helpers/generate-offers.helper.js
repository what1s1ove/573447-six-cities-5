import {
  getRandomItem,
  getRandomItems,
  getRandomNumber,
  generateRandomId,
} from '~/helpers/helpers';
import {OfferCity, OfferType} from '~/common/enums/enums';

const OfferConfig = {
  TITLES: [
    `Beautiful \u0026 luxurious apartment at great location`,
    `Wood and stone place`,
    `Canal View Prinsengracht`,
    `Nice, cozy, warm big bed apartment`,
  ],
  DESCRIPTIONS: [
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`,
    `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    `If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.`,
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
      `img/studio-01.jpg`,
      `img/room.jpg`,
    ],
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
});

const generateOffers = (count) => {
  const offers = Array.from(new Array(count), generateOffer);

  return offers;
};

export {generateOffer, generateOffers};
