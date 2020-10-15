import {getRandomNumber, getRandomItem} from '~/helpers/helpers';

const OfferLocationConfig = {
  COORDS: {
    LATITUDES: [
      52.3909553943508,
      52.369553943508,
      52.3909553943508,
      52.3809553943508,
    ],
    LONGITUDES: [
      4.85309666406198,
      4.85309666406198,
      4.929309666406198,
      4.939309666406198,
    ],
  },
  ZOOM: {
    MIN: 5,
    MAX: 10,
  },
};

const generateOfferLocation = () => ({
  latitude: getRandomItem(OfferLocationConfig.COORDS.LATITUDES),
  longitude: getRandomItem(OfferLocationConfig.COORDS.LONGITUDES),
  zoom: getRandomNumber(
      OfferLocationConfig.ZOOM.MIN,
      OfferLocationConfig.ZOOM.MAX
  ),
});

export {generateOfferLocation};
