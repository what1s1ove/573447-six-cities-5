import {FavoritesActionType, OfferFavoriteStatus} from '~/common/enums/enums';
import {adaptOffersToClient, adaptOfferToClient, extendObject} from '~/helpers/helpers';

const FavoritesActionCreator = {
  loadFavorites: (offers) => ({
    type: FavoritesActionType.LOAD_FAVORITES,
    payload: {
      offers,
    },
  }),
  updateFavorite: (offer) => ({
    type: FavoritesActionType.UPDATE_FAVORITE,
    payload: {
      offer,
    },
  }),
  fetchFavorites: () => (dispatch, _, {api}) => (
    api
      .get(`/favorite`)
      .then(({data}) =>
        dispatch(FavoritesActionCreator.loadFavorites(adaptOffersToClient(data)))
      )
      .catch((err) => {
        throw err;
      })
  ),
  toggleFavorite: (offer) => (dispatch, _, {api}) => (
    Promise.resolve(() =>
      dispatch(FavoritesActionCreator.updateFavorite(extendObject(offer, {
        isSaving: true,
      }))))
      .then(() => api.post(`/favorite/${offer.id}/${offer.isFavorite ? OfferFavoriteStatus.FALSE : OfferFavoriteStatus.TRUE}`))
      .then(({data}) =>
        dispatch(FavoritesActionCreator.updateFavorite(adaptOfferToClient(data)))
      )
      .catch((err) => {
        dispatch(FavoritesActionCreator.updateFavorite(extendObject(offer, {
          isSaving: false
        })));

        throw err;
      })
  )
};

export {FavoritesActionCreator};
