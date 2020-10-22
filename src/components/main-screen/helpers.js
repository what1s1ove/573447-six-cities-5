import {getSortedItems} from '~/helpers/helpers';

const DEFAULT_SELECTED_CITY_IDX = 0;

const getDefaultLocation = (cities) => {
  const defaultLocation = cities[DEFAULT_SELECTED_CITY_IDX] || null;

  return defaultLocation;
};

const getSortedLocations = (locations) => {
  const sortedLocations = getSortedItems(locations, (locationA, locationB) =>
    locationA.name.localeCompare(locationB.name)
  );

  return sortedLocations;
};

export {getDefaultLocation, getSortedLocations};
