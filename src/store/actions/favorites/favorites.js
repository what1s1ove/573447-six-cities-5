import {AppActionCreator} from '~/store/actions/app/app';
import {
  ApiRoute,
  FavoritesActionType,
  OfferFavoriteStatus,
} from '~/common/enums/enums';
import {
  adaptOffersToClient,
  adaptOfferToClient,
  extendObject,
} from '~/helpers/helpers';

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
  fetchFavorites: () => (dispatch, _, {api}) => {
    api
      .get(ApiRoute.FAVORITE)
      .then(({data}) =>
        dispatch(FavoritesActionCreator.loadFavorites(adaptOffersToClient(data)))
      )
      .catch((err) => dispatch(AppActionCreator.setError(err)));
  },
  toggleFavorite: (offer) => (dispatch, _, {api}) => (
    Promise.resolve(() =>
      dispatch(FavoritesActionCreator.updateFavorite(extendObject(offer, {
        isSaving: true,
      }))))
      .then(() => api.post(`${ApiRoute.FAVORITE}/${offer.id}/${offer.isFavorite ? OfferFavoriteStatus.FALSE : OfferFavoriteStatus.TRUE}`))
      .then(({data}) =>
        dispatch(FavoritesActionCreator.updateFavorite(adaptOfferToClient(data)))
      )
      .catch((err) => {
        dispatch(FavoritesActionCreator.updateFavorite(extendObject(offer, {
          isSaving: false
        })));

        dispatch(AppActionCreator.setError(err));
      })
  )
};

export {FavoritesActionCreator};
