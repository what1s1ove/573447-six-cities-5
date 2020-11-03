import {adaptUserToClient} from '~/helpers/user';
import {getSortedItems} from '~/helpers/array';
import {AppRoute, OfferFavoriteStatus, SortType} from '~/common/enums/enums';

const MAX_PERCENTS = 100;
const MAX_OFFER_RATING = 5;

const getRatingInPercents = (rating) => {
  const offerRatingInPercents =
    (Math.round(rating) / MAX_OFFER_RATING) * MAX_PERCENTS;

  return offerRatingInPercents;
};

const getOfferLink = (offerId) => {
  const offerLink = `${AppRoute.OFFER}/${offerId}`;

  return offerLink;
};

const getUniqueOfferCities = (offers) => {
  const uniquesOffersCities = offers.reduce((offersCities, offer) => {
    const hasSuchCity = offersCities.some(
        (city) => city.name === offer.city.name
    );

    return hasSuchCity ? offersCities : [...offersCities, offer.city];
  }, []);

  return uniquesOffersCities;
};

const getSortedLocations = (locations) => {
  const sortedLocations = getSortedItems(locations, (locationA, locationB) =>
    locationA.name.localeCompare(locationB.name)
  );

  return sortedLocations;
};

const getOfferLocations = (offers) => {
  const uniqueLocations = getUniqueOfferCities(offers);
  const sortedLocations = getSortedLocations(uniqueLocations);

  return sortedLocations;
};

const getOffersByCity = (offers, city) => {
  const offersByCity = offers.filter((offer) => offer.city.name === city.name);

  return offersByCity;
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


const adaptOfferToClient = (offer) => ({
  id: offer.id,
  city: offer.city,
  type: offer.type,
  title: offer.title,
  rating: offer.rating,
  description: offer.description,
  price: offer.price,
  imagePreview: offer.preview_image,
  images: offer.images,
  isPremium: offer.is_premium,
  isFavorite: offer.is_favorite,
  bedroomCount: offer.bedrooms,
  maxAdultsCount: offer.max_adults,
  location: offer.location,
  goods: offer.goods,
  host: adaptUserToClient(offer.host),
  isSaving: false,
});

const adaptOffersToClient = (offers) => {
  const adaptedOffers = offers.map(adaptOfferToClient);

  return adaptedOffers;
};

const getOfferFavoriteStatus = (isFavorite) => {
  const offerStatus = isFavorite ? OfferFavoriteStatus.FALSE : OfferFavoriteStatus.TRUE;

  return offerStatus;
}

export {
  getRatingInPercents,
  getOfferLink,
  getUniqueOfferCities,
  getSortedLocations,
  getOfferLocations,
  getOffersByCity,
  getSortedOffers,
  adaptOfferToClient,
  adaptOffersToClient,
  getOfferFavoriteStatus,
};
