import * as React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {FavoritesActionCreator} from '~/store/actions/actions';
import {offerType} from '~/common/prop-types/prop-types';
import FavoriteOffersItem from '~/components/favorite-offers-item/favorite-offers-item';

const FavoriteOffersList = ({offers}) => {
  const dispatch = useDispatch();

  const handleFavoriteToggle = React.useCallback((offer) => {
    dispatch(FavoritesActionCreator.toggleFavorite(offer));
  }, [dispatch]);

  return (
    <div className="favorites__places">
      {offers.map((offer) => (
        <FavoriteOffersItem
          offer={offer}
          onFavoriteToggle={handleFavoriteToggle}
          key={offer.id}
        />
      ))}
    </div>
  );
};

FavoriteOffersList.propTypes = {
  offers: PropTypes.arrayOf(offerType.isRequired).isRequired,
};

export default FavoriteOffersList;
