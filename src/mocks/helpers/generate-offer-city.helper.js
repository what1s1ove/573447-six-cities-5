import {OfferCity} from '~/common/enums/enums';

const cityToLocationMap = {
  [OfferCity.AMSTERDAM]: {
    latitude: 52.38333,
    longitude: 4.9,
    zoom: 9,
  },
};

const generateOfferCity = (city) => ({
  name: city,
  location: cityToLocationMap[city],
});

export {generateOfferCity};
