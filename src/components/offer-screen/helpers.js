const MAX_SIMILAR_OFFERS_COUNT = 3;

const getOfferById = (offers, id) => {
  const offerById = offers.find((offer) => offer.id === id);

  return offerById || null;
};

const getSimilarOffer = (offers) => {
  const similarOffers = offers.slice(0, MAX_SIMILAR_OFFERS_COUNT);

  return similarOffers;
};

export {getOfferById, getSimilarOffer};
