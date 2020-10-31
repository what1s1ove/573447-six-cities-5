import {generateOffers} from '~/mocks/helpers/helpers';
import {AppConfig} from '~/common/enums/enums';

const offers = generateOffers(AppConfig.OFFERS_COUNT);

const initialState = {
  offers,
};

const placesDataReducer = (state = initialState) => {
  return state;
};

export {placesDataReducer};
