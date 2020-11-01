import {PlaceActionType} from '~/common/enums/enums';
import {extendObject} from '~/helpers/object';

const initialState = {
  offer: null,
  reviews: [],
  similarOffers: [],
};

const placeReducer = (state = initialState, action) => {
  switch (action.type) {
    case PlaceActionType.LOAD_OFFER: {
      const {offer} = action.payload;

      return extendObject(state, {
        offer,
      });
    }
    case PlaceActionType.LOAD_REVIEWS: {
      const {reviews} = action.payload;

      return extendObject(state, {
        reviews,
      });
    }
    case PlaceActionType.LOAD_SIMILAR_OFFERS: {
      const {similarOffers} = action.payload;

      return extendObject(state, {
        similarOffers,
      });
    }
    case PlaceActionType.UPDATE_SIMILAR_OFFER: {
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

export {placeReducer};
