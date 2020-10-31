import {PlaceActionType} from '~/common/enums/enums';
import {
  adaptOffersToClient,
  adaptOfferToClient,
  adaptReviewsToClient,
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
  uploadReview: (review) => ({
    type: PlaceActionType.UPLOAD_COMMENT,
    payload: {
      review,
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
  saveReview: (offerId, comment) => (dispatch, _, {api}) => {
    api
      .post(`/comments/${offerId}`, comment)
      .then(({data}) => dispatch(PlaceActionCreator.uploadReview(data)))
      .catch((err) => {
        throw err;
      });
  },
};

export {PlaceActionCreator};
