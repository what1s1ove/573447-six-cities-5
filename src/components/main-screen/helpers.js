const DEFAULT_SELECTED_CITY_IDX = 0;

const getDefaultLocation = (cities) => {
  const defaultLocation = cities[DEFAULT_SELECTED_CITY_IDX] || null;

  return defaultLocation;
};

export {getDefaultLocation};
