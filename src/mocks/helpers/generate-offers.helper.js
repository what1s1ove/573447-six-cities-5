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
  DESCRIPTION: {
    SENTENCES: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`,
    MIN_SENTENCE: 1,
    MAX_SENTENCE: 5,
  },
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
  description: OfferConfig.DESCRIPTION.SENTENCES.split(`.`)
    .slice(
        0,
        getRandomNumber(
            OfferConfig.DESCRIPTION.MIN_SENTENCE,
            OfferConfig.DESCRIPTION.MAX_SENTENCE
        )
    )
    .join(``),
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
