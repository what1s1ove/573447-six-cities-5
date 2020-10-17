const getOffersByCity = (offers, city) => {
  const offersByCity = offers.filter((offer) => offer.city.name === city.name);

  return offersByCity;
};

export {getOffersByCity};
