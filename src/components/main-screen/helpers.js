const DEFAULT_SELECTED_CITY_IDX = 0;

const getDefaultLocation = (cities) => {
  const defaultLocation = cities[DEFAULT_SELECTED_CITY_IDX] || null;

  return defaultLocation;
};

const getLocationByName = (locations, offerCity) => {
  const locationByName = locations.find(
      (location) => location.name === offerCity
  );

  return locationByName;
};

export {
  getDefaultLocation,
  getLocationByName,
};
