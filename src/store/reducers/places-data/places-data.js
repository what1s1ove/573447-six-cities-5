import {
  FavoritesActionType,
  PlaceActionType,
  PlacesDataActionType,
} from '~/common/enums/enums';
import {extendObject} from '~/helpers/object';

const initialState = {
  offers: [],
};

const placesDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case PlacesDataActionType.LOAD_OFFERS: {
      const {offers} = action.payload;

      return extendObject(state, {
        offers,
      });
    }
    case PlacesDataActionType.UPDATE_OFFER:
    case PlaceActionType.UPDATE_SIMILAR_OFFER:
    case PlaceActionType.LOAD_OFFER:
    case FavoritesActionType.UPDATE_FAVORITE: {
      const {offer: updatedOffer} = action.payload;

      return extendObject(state, {
        offers: state.offers.map((offer) =>
          offer.id === updatedOffer.id ? updatedOffer : offer
        ),
      });
    }
  }

  return state;
};

export {initialState, placesDataReducer};
