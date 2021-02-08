import * as React from 'react';
import PropTypes from 'prop-types';
import {offerType, offerCityType} from '~/common/prop-types/prop-types';
import FavoriteOffersList from '~/components/favorite-offers-list/favorite-offers-list';

const FavoriteCitiesItem = ({city, offers}) => (
  <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <span className="locations__item-link">
          <span>{city.name}</span>
        </span>
      </div>
    </div>
    <FavoriteOffersList offers={offers} />
  </li>
);

FavoriteCitiesItem.propTypes = {
  city: offerCityType.isRequired,
  offers: PropTypes.arrayOf(offerType.isRequired).isRequired,
};

export default FavoriteCitiesItem;
