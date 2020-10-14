import {getRandomNumber} from '~/helpers/helpers';

const OfferLocationConfig = {
  COORDS: {
    LATITUDE: {
      MIN: 52.3,
      MAX: 52.3,
    },
    LONGITUDE: {
      MIN: 4.8,
      MAX: 4.9,
    },
    FRACTIONAL_PART_COUNT: 12,
  },
  ZOOM: {
    MIN: 5,
    MAX: 10,
  },
};

const generateOfferLocation = () => ({
  latitude: getRandomNumber(
      OfferLocationConfig.COORDS.LATITUDE.MIN,
      OfferLocationConfig.COORDS.LATITUDE.MAX,
      OfferLocationConfig.COORDS.FRACTIONAL_PART_COUNT
  ),
  longitude: getRandomNumber(
      OfferLocationConfig.COORDS.LONGITUDE.MIN,
      OfferLocationConfig.COORDS.LONGITUDE.MAX,
      OfferLocationConfig.COORDS.FRACTIONAL_PART_COUNT
  ),
  zoom: getRandomNumber(OfferLocationConfig.ZOOM.MIN, OfferLocationConfig.ZOOM.MAX),
});

export {generateOfferLocation};
