const DEFAULT_SELECTED_CITY_IDX = 0;

const getUniqueOfferCities = (offers) => {
  const uniquesOffersCities = offers.reduce((offersCities, offer) => {
    const hasSuchCity = offersCities.some((city) => city.name === offer.city.name);

    return hasSuchCity ? offersCities : [...offersCities, offer.city];
  }, []);

  return uniquesOffersCities;
};

const getDefaultLocation = (cities) => {
  const defaultLocation = cities[DEFAULT_SELECTED_CITY_IDX] || null;

  return defaultLocation;
};

export {getUniqueOfferCities, getDefaultLocation};
