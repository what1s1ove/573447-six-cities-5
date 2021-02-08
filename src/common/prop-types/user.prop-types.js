import PropTypes from 'prop-types';

const userType = PropTypes.exact({
  avatarUrl: PropTypes.string.isRequired,
  email: PropTypes.string,
  id: PropTypes.number.isRequired,
  isPro: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
});

export {userType};
