import {generateOffer} from '~/helpers/mocks/generate-offer.helper';

const generateOffers = (count) => {
  const offers = Array.from(new Array(count), generateOffer);

  return offers;
};

export {generateOffers};
