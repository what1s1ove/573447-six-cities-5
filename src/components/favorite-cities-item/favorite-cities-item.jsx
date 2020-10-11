import * as React from 'react';
import PropTypes from 'prop-types';
import {offerType} from '~/common/prop-types/prop-types';
import FavoriteOffersList from '~/components/favorite-offers-list/favorite-offers-list';

const FavoriteCitiesItem = ({city, offers}) => (
  <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <span className="locations__item-link">
          <span>{city}</span>
        </span>
      </div>
    </div>
    <FavoriteOffersList offers={offers} />
  </li>
);

FavoriteCitiesItem.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(offerType).isRequired,
};

export default FavoriteCitiesItem;
