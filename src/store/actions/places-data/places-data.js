import {OfferFavoriteStatus, PlacesDataActionType} from '~/common/enums/enums';
import {adaptOffersToClient, adaptOfferToClient, extendObject} from '~/helpers/helpers';

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
      .get(`/hotels`)
      .then(({data}) =>
        dispatch(PlacesDataActionCreator.loadOffers(adaptOffersToClient(data)))
      )
      .catch((err) => {
        throw err;
      }),
  toggleFavorite: (offer) => (dispatch, _, {api}) => (
    Promise.resolve(() =>
      dispatch(PlacesDataActionCreator.updateOffer(extendObject(offer, {
        isSaving: true,
      }))))
      .then(() => api.post(`/favorite/${offer.id}/${offer.isFavorite ? OfferFavoriteStatus.FALSE : OfferFavoriteStatus.TRUE}`))
      .then(({data}) =>
        dispatch(PlacesDataActionCreator.updateOffer(adaptOfferToClient(data)))
      )
      .catch((err) => {
        dispatch(PlacesDataActionCreator.loadOffer(extendObject(offer, {
          isSaving: false
        })));

        throw err;
      })
  ),
};

export {PlacesDataActionCreator};
