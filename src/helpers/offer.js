import {AppRoute} from '~/common/enums/enums';

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

const getOffersByCity = (offers, city) => {
  const offersByCity = offers.filter((offer) => offer.city.name === city.name);

  return offersByCity;
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
  host: offer.host,
});

const adaptOffersToClient = (offers) => {
  const adaptedOffers = offers.map(adaptOfferToClient);

  return adaptedOffers;
};

export {
  getRatingInPercents,
  getOfferLink,
  getUniqueOfferCities,
  getOffersByCity,
  adaptOfferToClient,
  adaptOffersToClient,
};
