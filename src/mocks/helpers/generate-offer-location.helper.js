import {getRandomNumber} from '~/helpers/helpers';

const OfferLocationConfig = {
  COORDS: [
    {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
    },
    {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
    },
    {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
    },
    {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
    },
  ],

  ZOOM: {
    MIN: 5,
    MAX: 10,
  },
};

const generateOfferLocation = (offerIdx) => {
  const {latitude, longitude} = OfferLocationConfig.COORDS[offerIdx];

  return {
    latitude,
    longitude,
    zoom: getRandomNumber(
        OfferLocationConfig.ZOOM.MIN,
        OfferLocationConfig.ZOOM.MAX
    ),
  };
};

export {generateOfferLocation};
