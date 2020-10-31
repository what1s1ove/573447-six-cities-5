import {getUniqueOfferCities} from '~/helpers/helpers';
import {generateOffers} from '~/mocks/helpers/helpers';
import {AppConfig} from '~/common/enums/enums';

const offers = generateOffers(AppConfig.OFFERS_COUNT);
const locations = getUniqueOfferCities(offers);

const initialState = {
  offers,
  locations,
};

const placesDataReducer = (state = initialState) => {
  return state;
};

export {placesDataReducer};
