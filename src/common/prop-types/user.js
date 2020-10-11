import PropTypes from 'prop-types';

const userType = PropTypes.exact({
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  isPro: PropTypes.bool.isRequired,
}).isRequired;

export {userType};
