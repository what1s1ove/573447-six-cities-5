import * as React from 'react';
import PropTypes from 'prop-types';
import LocationItem from '~/components/locations-item/locations-item';

const LocationsList = ({locations, activeLocation, onLocationChange}) => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {locations.map((location) => {
          const isActive = location === activeLocation;

          return (
            <LocationItem
              location={location}
              isActive={isActive}
              onLocationChange={onLocationChange}
              key={location}
            />
          );
        })}
      </ul>
    </section>
  </div>
);

LocationsList.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  activeLocation: PropTypes.string.isRequired,
  onLocationChange: PropTypes.func.isRequired,
};

export default LocationsList;
