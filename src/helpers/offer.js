import {AppRoute} from '~/common/enums/enums';

const MAX_PERCENTS = 100;
const MAX_OFFER_RATING = 5;

const getRatingInPercents = (rating) => {
  const offerRatingInPercents = (Math.round(rating) / MAX_OFFER_RATING) * MAX_PERCENTS;

  return offerRatingInPercents;
};

const getOfferLink = (offerId) => {
  const offerLink = `${AppRoute.OFFER}/${offerId}`;

  return offerLink;
};

export {getRatingInPercents, getOfferLink};
