import {extendObject} from '~/helpers/helpers';
import {FavoritesActionType} from '~/common/enums/enums';

const initialState = {
  offers: [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FavoritesActionType.LOAD_FAVORITES: {
      const {offers} = action.payload;

      return extendObject(state, {
        offers,
      });
    }
    case FavoritesActionType.UPDATE_FAVORITE: {
      const {offer: updatedOffer} = action.payload;

      return extendObject(state, {
        offers: state.offers.map(
            (offer) => offer.id === updatedOffer.id ? updatedOffer : offer
        ),
      });
    }
  }

  return state;
};

export {initialState, favoritesReducer};
