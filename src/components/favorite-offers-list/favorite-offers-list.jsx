import * as React from 'react';
import PropTypes from 'prop-types';
import {offerType} from '~/common/prop-types/prop-types';
import FavoriteOffersItem from '~/components/favorite-offers-item/favorite-offers-item';

const FavoriteOffersList = ({offers}) => (
  <div className="favorites__places">
    {offers.map((offer) => (
      <FavoriteOffersItem offer={offer} key={offer.id} />
    ))}
  </div>
);

FavoriteOffersList.propTypes = {
  offers: PropTypes.arrayOf(offerType).isRequired,
};

export default FavoriteOffersList;
