import * as React from 'react';
import PropTypes from 'prop-types';

const Map = ({renderMap}) => <>{renderMap()}</>;

Map.propTypes = {
  renderMap: PropTypes.func.isRequired,
};

export default Map;
