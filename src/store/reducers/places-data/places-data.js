import {PlacesDataActionType} from '~/common/enums/enums';
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
  }
  return state;
};

export {placesDataReducer};
