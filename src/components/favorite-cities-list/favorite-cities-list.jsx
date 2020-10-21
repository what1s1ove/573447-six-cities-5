import * as React from 'react';
import PropTypes from 'prop-types';
import {getUniqueOfferCities, getOffersByCity} from '~/helpers/helpers';
import {offerType} from '~/common/prop-types/prop-types';
import FavoriteCitiesItem from '~/components/favorite-cities-item/favorite-cities-item';

const FavoriteCitiesList = ({offers}) => {
  const uniqueCities = getUniqueOfferCities(offers);

  return (
    <ul className="favorites__list">
      {uniqueCities.map((city) => {
        const offersByCity = getOffersByCity(offers, city);

        return (
          <FavoriteCitiesItem city={city} offers={offersByCity} key={city.name} />
        );
      })}
    </ul>
  );
};

FavoriteCitiesList.propTypes = {
  offers: PropTypes.arrayOf(offerType.isRequired).isRequired,
};

export default FavoriteCitiesList;
