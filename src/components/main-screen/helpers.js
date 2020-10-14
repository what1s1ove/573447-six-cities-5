const getOfferCityByLocation = (offers, location) => {
  const offerCity = offers.find((offer) => offer.city.name === location);

  return offerCity.city;
};

export {getOfferCityByLocation};
