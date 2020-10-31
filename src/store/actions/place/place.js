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
  fetchOffer: (offerId) => (dispatch, _, {api}) => {
    api
      .get(`/hotels/${offerId}`)
      .then(({data}) =>
        dispatch(PlaceActionCreator.loadOffer(adaptOfferToClient(data)))
      )
      .catch((err) => {
        throw err;
      });
  },
  fetchReviews: (offerId) => (dispatch, _, {api}) => {
    api
      .get(`/comments/${offerId}`)
      .then(({data}) =>
        dispatch(PlaceActionCreator.loadReviews(adaptReviewsToClient(data)))
      )
      .catch((err) => {
        throw err;
      });
  },
  fetchSimilarOffers: (offerId) => (dispatch, _, {api}) => {
    api
      .get(`/hotels/${offerId}/nearby`)
      .then(({data}) =>
        dispatch(
            PlaceActionCreator.loadSimilarOffers(adaptOffersToClient(data))
        )
      )
      .catch((err) => {
        throw err;
      });
  },
  uploadReview: (offerId, comment) => (dispatch, _, {api}) => {
    api
      .post(`/comments/${offerId}`, comment)
      .then(({data}) =>
        dispatch(PlaceActionCreator.loadReviews(adaptReviewsToClient(data)))
      )
      .catch((err) => {
        throw err;
      });
  },
  toggleFavorite: (offer, isFavorite) => (dispatch, _, {api}) => {
    dispatch(PlaceActionCreator.loadOffer(extendObject(offer, {
      isSaving: true
    })));

    api
      .post(`/favorite/${offer.id}/${isFavorite ? OfferFavoriteStatus.TRUE : OfferFavoriteStatus.FALSE}`)
      .then(({data}) =>
        dispatch(PlaceActionCreator.loadOffer(adaptOfferToClient(data)))
      )
      .catch((err) => {
        dispatch(PlaceActionCreator.loadOffer(extendObject(offer, {
          isSaving: false
        })));

        throw err;
      });
  },
};

export {PlaceActionCreator};
