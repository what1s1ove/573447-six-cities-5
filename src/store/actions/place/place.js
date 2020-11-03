import {AppActionCreator} from '~/store/actions/app/app';
import {PlaceActionType, OfferFavoriteStatus} from '~/common/enums/enums';
import {
  adaptOffersToClient,
  adaptOfferToClient,
  adaptReviewsToClient,
  extendObject,
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
      .get(`/hotels/${offerId}`)
      .then(({data}) =>
        dispatch(PlaceActionCreator.loadOffer(adaptOfferToClient(data)))
      )
      .catch((err) => {
        throw err;
      })
  ),
  fetchReviews: (offerId) => (dispatch, _, {api}) => (
    api
      .get(`/comments/${offerId}`)
      .then(({data}) =>
        dispatch(PlaceActionCreator.loadReviews(adaptReviewsToClient(data)))
      )
      .catch((err) => {
        throw err;
      })
  ),
  fetchSimilarOffers: (offerId) => (dispatch, _, {api}) => (
    api
      .get(`/hotels/${offerId}/nearby`)
      .then(({data}) =>
        dispatch(
            PlaceActionCreator.loadSimilarOffers(adaptOffersToClient(data))
        )
      )
      .catch((err) => {
        throw err;
      })
  ),
  uploadReview: (offerId, comment) => (dispatch, _, {api}) => (
    api
      .post(`/comments/${offerId}`, comment)
      .then(({data}) =>
        dispatch(PlaceActionCreator.loadReviews(adaptReviewsToClient(data)))
      )
      .catch((err) => dispatch(AppActionCreator.setError(err)))
  ),
  toggleFavorite: (offer) => (dispatch, _, {api}) => (
    Promise.resolve(() =>
      dispatch(PlaceActionCreator.loadOffer(extendObject(offer, {
        isSaving: true,
      }))))
      .then(() => api.post(`/favorite/${offer.id}/${offer.isFavorite ? OfferFavoriteStatus.FALSE : OfferFavoriteStatus.TRUE}`))
      .then(({data}) =>
        dispatch(PlaceActionCreator.loadOffer(adaptOfferToClient(data)))
      )
      .catch((err) => {
        dispatch(PlaceActionCreator.loadOffer(extendObject(offer, {
          isSaving: false
        })));

        dispatch(AppActionCreator.setError(err));
      })
  ),
  toggleSimilarOfferFavorite: (offer) => (dispatch, _, {api}) => (
    Promise.resolve(() =>
      dispatch(PlaceActionCreator.updateSimilarOffer(extendObject(offer, {
        isSaving: true,
      }))))
      .then(() => api.post(`/favorite/${offer.id}/${offer.isFavorite ? OfferFavoriteStatus.FALSE : OfferFavoriteStatus.TRUE}`))
      .then(({data}) =>
        dispatch(PlaceActionCreator.updateSimilarOffer(adaptOfferToClient(data)))
      )
      .catch((err) => {
        dispatch(PlaceActionCreator.updateSimilarOffer(extendObject(offer, {
          isSaving: false
        })));

        dispatch(AppActionCreator.setError(err));
      })
  )
};

export {PlaceActionCreator};
