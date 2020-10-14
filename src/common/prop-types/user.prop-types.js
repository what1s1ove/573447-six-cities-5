import PropTypes from 'prop-types';

const userType = PropTypes.exact({
  avatarUrl: PropTypes.string.isRequired,
  isPro: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
}).isRequired;

export {userType};
