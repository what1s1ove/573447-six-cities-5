import {generateOffers} from '~/mocks/helpers/helpers';
import {AppConfig} from '~/common/enums/enums';

const offers = generateOffers(AppConfig.OFFERS_COUNT);
const locations = [];

const initialState = {
  offers,
  locations,
};

const offersReducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export {offersReducer};
