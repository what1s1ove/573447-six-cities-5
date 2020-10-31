import {createSelector} from 'reselect';
import {getOfferLocations, getOffersByCity, getSortedOffers} from '~/helpers/offer';

const getOffers = (state) => state.data.offers;

const getLocations = createSelector(getOffers, (offers) => {
  const locations = getOfferLocations(offers);

  return locations;
});

const getFilteredOffers = (currentLocation, activeSort) =>
  createSelector(
      getOffers,
      () => currentLocation,
      () => activeSort,
      (offers, location, sort) => {
        if (!offers.length || !location || !sort) {
          return [];
        }

        const offersByLocation = getOffersByCity(offers, location);
        const sortedOffers = getSortedOffers(offersByLocation, sort);

        return sortedOffers;
      }
  );

export {getOffers, getLocations, getFilteredOffers};
