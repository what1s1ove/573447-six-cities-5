import {PlacesDataActionType} from '~/common/enums/enums';
import {adaptOffersToClient} from '~/helpers/offer';

const PlacesDataActionCreator = {
  loadOffers: (offers) => ({
    type: PlacesDataActionType.LOAD_OFFERS,
    payload: {
      offers,
    },
  }),
  fetchOffers: () => (dispatch, _, {api}) => {
    api
      .get(`/hotels`)
      .then(({data}) => {
        const adaptedOffers = adaptOffersToClient(data);

        dispatch(PlacesDataActionCreator.loadOffers(adaptedOffers));
      })
      .catch((err) => {
        throw err;
      });
  },
};

export {PlacesDataActionCreator};
