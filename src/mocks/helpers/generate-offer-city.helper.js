import {OfferCity} from '~/common/enums/enums';

const cityToLocationMap = {
  [OfferCity.AMSTERDAM]: {
    latitude: 52.38333,
    longitude: 4.9,
    zoom: 9,
  },
  [OfferCity.PARIS]: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13,
  },
  [OfferCity.BRUSSELS]: {
    latitude: 50.846557,
    longitude: 4.351697,
    zoom: 13,
  },
  [OfferCity.HAMBURG]: {
    latitude: 53.550341,
    longitude: 10.000654,
    zoom: 13,
  },
  [OfferCity.COLOGNE]: {
    latitude: 50.938361,
    longitude: 6.959974,
    zoom: 13,
  },
  [OfferCity.DUSSELDORF]: {
    latitude: 51.225402,
    longitude: 6.776314,
    zoom: 13,
  },
};

const generateOfferCity = (city) => ({
  name: city,
  location: cityToLocationMap[city],
});

export {generateOfferCity};
