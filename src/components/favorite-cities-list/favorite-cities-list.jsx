import * as React from 'react';
import PropTypes from 'prop-types';
import {offerType} from '~/common/prop-types/prop-types';
import FavoriteCitiesItem from '~/components/favorite-cities-item/favorite-cities-item';
import {getUniquesCities, getOffersByCity} from './helpers';

const FavoriteCitiesList = ({offers}) => {
  const uniqueCities = getUniquesCities(offers);

  return (
    <ul className="favorites__list">
      {uniqueCities.map((city) => {
        const offersByCity = getOffersByCity(offers, city);

        return (
          <FavoriteCitiesItem city={city} offers={offersByCity} key={city} />
        );
      })}
    </ul>
  );
};

FavoriteCitiesList.propTypes = {
  offers: PropTypes.arrayOf(offerType.isRequired).isRequired,
};

export default FavoriteCitiesList;
