import {createSelector} from 'reselect';
import {getOfferLocations, getOffersByCityName, getSortedOffers} from '~/helpers/offer';

const getOffers = ({data}) => data.offers;

const getLocations = createSelector(getOffers, (offers) => {
  const locations = getOfferLocations(offers);

  return locations;
});

const getFilteredOffers = (currentCityName, activeSort) =>
  createSelector(
      getOffers,
      () => currentCityName,
      () => activeSort,
      (offers, cityName, sort) => {
        if (!offers.length || !cityName || !sort) {
          return [];
        }

        const offersByLocation = getOffersByCityName(offers, cityName);
        const sortedOffers = getSortedOffers(offersByLocation, sort);

        return sortedOffers;
      }
  );

export {getOffers, getLocations, getFilteredOffers};
