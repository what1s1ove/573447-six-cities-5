const getLocationByName = (locations, offerCity) => {
  const locationByName = locations.find(
      (location) => location.name === offerCity
  );

  return locationByName;
};

export {getLocationByName};
