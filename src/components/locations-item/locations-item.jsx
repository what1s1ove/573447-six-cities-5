import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {offerCityType} from '~/common/prop-types/prop-types';

const LocationsItem = ({location, isActive, onLocationChange}) => {
  const handleLocationChange = () => {
    onLocationChange(location);
  };

  return (
    <li className="locations__item">
      <button
        className={clsx(
            `locations__item-link tabs__item`,
            isActive && `tabs__item--active`
        )}
        onClick={handleLocationChange}
      >
        <span>{location.name}</span>
      </button>
    </li>
  );
};

LocationsItem.propTypes = {
  location: offerCityType.isRequired,
  isActive: PropTypes.bool.isRequired,
  onLocationChange: PropTypes.func.isRequired,
};

export default LocationsItem;
