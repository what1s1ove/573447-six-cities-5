import {AppActionCreator} from '~/store/actions/app/app';
import {
  PlaceActionType,
  ApiRoute,
  NotificationType,
} from '~/common/enums/enums';
import {
  adaptOffersToClient,
  adaptOfferToClient,
  adaptReviewsToClient,
  extendObject,
  getOfferFavoriteStatus,
} from '~/helpers/helpers';

const PlaceActionCreator = {
  loadOffer: (offer) => ({
    type: PlaceActionType.LOAD_OFFER,
    payload: {
      offer,
    },
  }),
  loadReviews: (reviews) => ({
    type: PlaceActionType.LOAD_REVIEWS,
    payload: {
      reviews,
    },
  }),
  loadSimilarOffers: (similarOffers) => ({
    type: PlaceActionType.LOAD_SIMILAR_OFFERS,
    payload: {
      similarOffers,
    },
  }),
  updateSimilarOffer: (offer) => ({
    type: PlaceActionType.UPDATE_SIMILAR_OFFER,
    payload: {
      offer
    }
  }),
  fetchOffer: (offerId) => (dispatch, _, {api}) => (
    api
      .get(`${ApiRoute.HOTELS}/${offerId}`)
      .then(({data}) =>
        dispatch(PlaceActionCreator.loadOffer(adaptOfferToClient(data)))
      )
      .catch(({response: {data}}) => dispatch(AppActionCreator.setNotification({
        message: data.error,
        type: NotificationType.ERROR,
      })))
  ),
  fetchReviews: (offerId) => (dispatch, _, {api}) => (
    api
      .get(`${ApiRoute.COMMENTS}/${offerId}`)
      .then(({data}) =>
        dispatch(PlaceActionCreator.loadReviews(adaptReviewsToClient(data)))
      )
      .catch(({response: {data}}) => dispatch(AppActionCreator.setNotification({
        message: data.error,
        type: NotificationType.ERROR,
      })))
  ),
  fetchSimilarOffers: (offerId) => (dispatch, _, {api}) => (
    api
      .get(`${ApiRoute.HOTELS}/${offerId}/nearby`)
      .then(({data}) =>
        dispatch(
            PlaceActionCreator.loadSimilarOffers(adaptOffersToClient(data))
        )
      )
      .catch(({response: {data}}) => dispatch(AppActionCreator.setNotification({
        message: data.error,
        type: NotificationType.ERROR,
      })))
  ),
  uploadReview: (offerId, comment) => (dispatch, _, {api}) => (
    api
      .post(`${ApiRoute.COMMENTS}/${offerId}`, comment)
      .then(({data}) =>
        dispatch(PlaceActionCreator.loadReviews(adaptReviewsToClient(data)))
      )
      .catch(({response: {data}}) => dispatch(AppActionCreator.setNotification({
        message: data.error,
        type: NotificationType.ERROR,
      })))
  ),
  toggleFavorite: (offer) => (dispatch, _, {api}) => (
    Promise.resolve(() =>
      dispatch(PlaceActionCreator.loadOffer(extendObject(offer, {
        isSaving: true,
      }))))
      .then(() => api.post(`${ApiRoute.FAVORITE}/${offer.id}/${getOfferFavoriteStatus(offer.isFavorite)}`))
      .then(({data}) =>
        dispatch(PlaceActionCreator.loadOffer(adaptOfferToClient(data)))
      )
      .catch(({response: {data}}) => {
        dispatch(PlaceActionCreator.loadOffer(extendObject(offer, {
          isSaving: false
        })));

        dispatch(AppActionCreator.setNotification({
          message: data.error,
          type: NotificationType.ERROR,
        }));
      })
  ),
  toggleSimilarOfferFavorite: (offer) => (dispatch, _, {api}) => (
    Promise.resolve(() =>
      dispatch(PlaceActionCreator.updateSimilarOffer(extendObject(offer, {
        isSaving: true,
      }))))
      .then(() => api.post(`${ApiRoute.FAVORITE}/${offer.id}/${getOfferFavoriteStatus(offer.isFavorite)}`))
      .then(({data}) =>
        dispatch(PlaceActionCreator.updateSimilarOffer(adaptOfferToClient(data)))
      )
      .catch(({response: {data}}) => {
        dispatch(PlaceActionCreator.updateSimilarOffer(extendObject(offer, {
          isSaving: false
        })));

        dispatch(AppActionCreator.setNotification({
          message: data.error,
          type: NotificationType.ERROR,
        }));
      })
  )
};

export {PlaceActionCreator};
