const getOfferById = (offers, id) => {
  const offerById = offers.find((offer) => offer.id === id);

  return offerById;
};

export {getOfferById};
