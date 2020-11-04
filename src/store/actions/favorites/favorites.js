import {AppActionCreator} from '~/store/actions/app/app';
import {
  ApiRoute,
  FavoritesActionType,
  NotificationType,
} from '~/common/enums/enums';
import {
  adaptOffersToClient,
  adaptOfferToClient,
  extendObject,
  getOfferFavoriteStatus,
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
  fetchFavorites: () => (dispatch, _, {api}) => (
    api
      .get(ApiRoute.FAVORITE)
      .then(({data}) =>
        dispatch(FavoritesActionCreator.loadFavorites(adaptOffersToClient(data)))
      )
      .catch(({response: {data}}) => dispatch(AppActionCreator.setNotification({
        message: data.error,
        type: NotificationType.ERROR,
      })))
  ),
  toggleFavorite: (offer) => (dispatch, _, {api}) => (
    Promise.resolve(() =>
      dispatch(FavoritesActionCreator.updateFavorite(extendObject(offer, {
        isSaving: true,
      }))))
      .then(() => api.post(`${ApiRoute.FAVORITE}/${offer.id}/${getOfferFavoriteStatus(offer.isFavorite)}`))
      .then(({data}) =>
        dispatch(FavoritesActionCreator.updateFavorite(adaptOfferToClient(data)))
      )
      .catch(({response: {data}}) => {
        dispatch(FavoritesActionCreator.updateFavorite(extendObject(offer, {
          isSaving: false
        })));

        dispatch(AppActionCreator.setNotification({
          message: data.error,
          type: NotificationType.ERROR,
        }));
      })
  )
};

export {FavoritesActionCreator};
