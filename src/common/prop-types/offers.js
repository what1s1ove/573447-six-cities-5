import PropTypes from 'prop-types';

const locationType = PropTypes.exact({
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired,
}).isRequired;

const offerType = PropTypes.exact({
  id: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  imagePreview: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  bedroomCount: PropTypes.number.isRequired,
  maxAdultsCount: PropTypes.number.isRequired,
  location: locationType,
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}).isRequired;

export {locationType, offerType};