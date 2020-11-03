import {AppActionCreator} from '~/store/actions/app/app';
import {
  adaptOffersToClient,
  adaptOfferToClient,
  getOfferFavoriteStatus,
  extendObject,
} from '~/helpers/helpers';
import {ApiRoute, PlacesDataActionType} from '~/common/enums/enums';

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
  fetchOffers: () => (dispatch, _, {api}) =>
    api
      .get(ApiRoute.HOTELS)
      .then(({data}) =>
        dispatch(PlacesDataActionCreator.loadOffers(adaptOffersToClient(data)))
      )
      .catch((err) => dispatch(AppActionCreator.setError(err))),
  toggleFavorite: (offer) => (dispatch, _, {api}) => (
    Promise.resolve(() =>
      dispatch(PlacesDataActionCreator.updateOffer(extendObject(offer, {
        isSaving: true,
      }))))
      .then(() => api.post(`${ApiRoute.FAVORITE}/${offer.id}/${getOfferFavoriteStatus(offer.isFavorite)}`))
      .then(({data}) =>
        dispatch(PlacesDataActionCreator.updateOffer(adaptOfferToClient(data)))
      )
      .catch((err) => {
        dispatch(PlacesDataActionCreator.updateOffer(extendObject(offer, {
          isSaving: false
        })));

        dispatch(AppActionCreator.setError(err));
      })
  ),
};

export {PlacesDataActionCreator};
