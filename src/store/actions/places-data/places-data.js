import {AppActionCreator} from '~/store/actions/app/app';
import {adaptOffersToClient} from '~/helpers/offer';
import {ApiRoute, PlacesDataActionType} from '~/common/enums/enums';

const PlacesDataActionCreator = {
  loadOffers: (offers) => ({
    type: PlacesDataActionType.LOAD_OFFERS,
    payload: {
      offers,
    },
  }),
  fetchOffers: () => (dispatch, _, {api}) => {
    api
      .get(ApiRoute.HOTELS)
      .then(({data}) =>
        dispatch(PlacesDataActionCreator.loadOffers(adaptOffersToClient(data)))
      )
      .catch((err) => dispatch(AppActionCreator.setError(err)));
  },
};

export {PlacesDataActionCreator};
