import PropTypes from 'prop-types';

const locationType = PropTypes.exact({
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired,
});

export {locationType};
