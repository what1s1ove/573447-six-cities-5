import {getRandomNumber} from '~/helpers/helpers';

const OfferLocationConfig = {
  COORDS: {
    MIN: 0,
    MAX: 50,
    FRACTIONAL_PART_COUNT: 13,
  },
  ZOOM: {
    MIN: 5,
    MAX: 10,
  },
};

const generateOfferLocation = () => ({
  latitude: getRandomNumber(
      OfferLocationConfig.COORDS.MIN,
      OfferLocationConfig.COORDS.MAX,
      OfferLocationConfig.COORDS.FRACTIONAL_PART_COUNT
  ),
  longitude: getRandomNumber(
      OfferLocationConfig.COORDS.MIN,
      OfferLocationConfig.COORDS.MAX,
      OfferLocationConfig.COORDS.FRACTIONAL_PART_COUNT
  ),
  zoom: getRandomNumber(OfferLocationConfig.ZOOM.MIN, OfferLocationConfig.ZOOM.MAX),
});

export {generateOfferLocation};
