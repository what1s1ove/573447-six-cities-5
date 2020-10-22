import {SortType} from '~/common/enums/enums';
import {getSortedItems, getOffersByCity} from '~/helpers/helpers';

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

const getSortedOffers = (offers, activeFilter) => {
  switch (activeFilter) {
    case SortType.TO_HIGHT: {
      return getSortedItems(
          offers,
          (offerA, offerB) => offerA.price - offerB.price
      );
    }
    case SortType.TO_LOW: {
      return getSortedItems(
          offers,
          (offerA, offerB) => offerB.price - offerA.price
      );
    }
    case SortType.TOP_RATE: {
      return getSortedItems(
          offers,
          (offerA, offerB) => offerB.rating - offerA.rating
      );
    }
  }

  return offers;
};

const getFilteredOffers = (offers, activeLocation, activeSort) => {
  const offersByLocation = getOffersByCity(offers, activeLocation);
  const sortedOffers = getSortedOffers(offersByLocation, activeSort);

  return sortedOffers;
};

export {
  getDefaultLocation,
  getSortedLocations,
  getSortedOffers,
  getFilteredOffers,
};
