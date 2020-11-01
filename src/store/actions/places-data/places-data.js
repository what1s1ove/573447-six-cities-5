import {PlacesDataActionType} from '~/common/enums/enums';
import {adaptOffersToClient} from '~/helpers/offer';

const PlacesDataActionCreator = {
  loadOffers: (offers) => ({
    type: PlacesDataActionType.LOAD_OFFERS,
    payload: {
      offers,
    },
  }),
  updateOffer: (offer) => ({
    type: PlacesDataActionType.UPDATE_OFFER,
    payload: {
      offer,
    },
  }),
  fetchOffers: () => (dispatch, _, {api}) => {
    api
      .get(`/hotels`)
      .then(({data}) =>
        dispatch(PlacesDataActionCreator.loadOffers(adaptOffersToClient(data)))
      )
      .catch((err) => {
        throw err;
      });
  },
};

export {PlacesDataActionCreator};
