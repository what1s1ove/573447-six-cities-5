import {getUniqueItems} from '~/helpers/helpers';

const getUniquesCities = (offers) => {
  const offersCities = offers.map((offer) => offer.city.name);
  const uniqueCities = getUniqueItems(offersCities);

  return uniqueCities;
};

const getOffersByCity = (offers, city) => {
  const offersByCity = offers.filter((offer) => offer.city.name === city);

  return offersByCity;
};

export {getUniquesCities, getOffersByCity};
