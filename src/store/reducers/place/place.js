import {PlaceActionType} from '~/common/enums/enums';
import {extendObject} from '~/helpers/object';

const initialState = {
  offer: null,
  comments: [],
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
    case PlaceActionType.LOAD_COMMENTS: {
      const {comments} = action.payload;

      return extendObject(state, {
        comments,
      });
    }
    case PlaceActionType.LOAD_SIMILAR_OFFERS: {
      const {similarOffers} = action.payload;

      return extendObject(state, {
        similarOffers,
      });
    }
    case PlaceActionType.UPLOAD_COMMENT: {
      const {comment} = action.payload;

      return extendObject(state, {
        comment,
      });
    }
  }

  return state;
};

export {placeReducer};
