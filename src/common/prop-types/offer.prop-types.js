import PropTypes from 'prop-types';
import {OfferRoomType} from '~/common/enums/enums';
import {locationType} from '~/common/prop-types/location.prop-types';
import {userType} from '~/common/prop-types/user.prop-types';

const offerType = PropTypes.exact({
  host: userType,
  location: locationType,
  bedroomCount: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  id: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  imagePreview: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  isPremium: PropTypes.bool.isRequired,
  maxAdultsCount: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    OfferRoomType.APARTMENT,
    OfferRoomType.ROOM,
    OfferRoomType.HOUSE,
    OfferRoomType.HOTEL,
  ]).isRequired,
}).isRequired;

export {offerType};
