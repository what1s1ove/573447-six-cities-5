import {getUniqueItems} from '~/helpers/helpers';

const getUniquesCities = (offers) => {
  const offersCities = offers.map((offer) => offer.city);
  const uniqueCities = getUniqueItems(offersCities);

  return uniqueCities;
};

const getOffersByCity = (offers, city) => {
  const offersByCity = offers.filter((offer) => offer.city === city);

  return offersByCity;
};

export {getUniquesCities, getOffersByCity};
