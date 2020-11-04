import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '~/services/api/api';
import {
  mockedOffers,
  mockedOffer,
  mockedFetchedOffers,
  mockedFetchedOffer,
  mockedReviews,
  mockedFetchedReviews,
} from '~/mocks/mocks';
import {
  adaptOffersToClient,
  adaptOfferToClient,
  adaptReviewsToClient,
} from '~/helpers/helpers';
import {OfferFavoriteStatus, PlaceActionType} from '~/common/enums/enums';
import {PlaceActionCreator} from './place';

const api = createAPI({
  onUnauthorized: jest.fn(),
});

describe(`Place action creator works correctly`, () => {
  it(`loadOffer ac returns correct action`, () => {
    expect(PlaceActionCreator.loadOffer(mockedOffer)).toEqual({
      type: PlaceActionType.LOAD_OFFER,
      payload: {
        offer: mockedOffer,
      },
    });
  });

  it(`loadReviews ac returns correct action`, () => {
    expect(PlaceActionCreator.loadReviews(mockedReviews)).toEqual({
      type: PlaceActionType.LOAD_REVIEWS,
      payload: {
        reviews: mockedReviews,
      },
    });
  });

  it(`loadSimilarOffers ac returns correct action`, () => {
    expect(PlaceActionCreator.loadSimilarOffers(mockedOffers)).toEqual({
      type: PlaceActionType.LOAD_SIMILAR_OFFERS,
      payload: {
        similarOffers: mockedOffers,
      },
    });
  });

  it(`updateSimilarOffer ac returns correct action`, () => {
    expect(PlaceActionCreator.updateSimilarOffer(mockedOffer)).toEqual({
      type: PlaceActionType.UPDATE_SIMILAR_OFFER,
      payload: {
        offer: mockedOffer,
      },
    });
  });

  it(`fetchOffer ac returns correct action. Should make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchOfferLoader = PlaceActionCreator.fetchOffer(mockedFetchedOffer.id);

    apiMock.onGet(`/hotels/${mockedFetchedOffer.id}`).reply(200, mockedFetchedOffer);

    return fetchOfferLoader(dispatch, jest.fn(), {api}).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: PlaceActionType.LOAD_OFFER,
        payload: {
          offer: adaptOfferToClient(mockedFetchedOffer),
        },
      });
    });
  });

  it(`fetchReviews ac returns correct action. Should make a correct API call to /comments`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchReviewsLoader = PlaceActionCreator.fetchReviews(mockedOffer.id);

    apiMock.onGet(`/comments/${mockedOffer.id}`).reply(200, mockedFetchedReviews);

    return fetchReviewsLoader(dispatch, jest.fn(), {api}).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: PlaceActionType.LOAD_REVIEWS,
        payload: {
          reviews: adaptReviewsToClient(mockedFetchedReviews),
        },
      });
    });
  });

  it(`fetchSimilarOffers ac returns correct action. Should make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchSimilarOffersLoader = PlaceActionCreator.fetchSimilarOffers(mockedFetchedOffer.id);

    apiMock.onGet(`/hotels/${mockedFetchedOffer.id}/nearby`).reply(200, mockedFetchedOffers);

    return fetchSimilarOffersLoader(dispatch, jest.fn(), {api}).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: PlaceActionType.LOAD_SIMILAR_OFFERS,
        payload: {
          similarOffers: adaptOffersToClient(mockedFetchedOffers),
        },
      });
    });
  });

  it(`uploadReview ac returns correct action. Should make a correct API call to /comments`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeComment = {comment: `Comment`, rating: `5`};
    const uploadReviewLoader = PlaceActionCreator.uploadReview(mockedOffer.id, fakeComment);

    apiMock.onPost(`/comments/${mockedOffer.id}`).reply(200, mockedFetchedReviews);

    return uploadReviewLoader(dispatch, jest.fn(), {api}).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: PlaceActionType.LOAD_REVIEWS,
        payload: {
          reviews: adaptReviewsToClient(mockedFetchedReviews),
        },
      });
    });
  });

  it(`toggleFavorite ac returns correct action. Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const toggleFavoriteLoader = PlaceActionCreator.toggleFavorite(mockedOffer);

    apiMock.onPost(`/favorite/${mockedOffer.id}/${OfferFavoriteStatus.TRUE}`).reply(200, mockedFetchedOffer);

    return toggleFavoriteLoader(dispatch, jest.fn(), {api}).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: PlaceActionType.LOAD_OFFER,
        payload: {
          offer: adaptOfferToClient(mockedFetchedOffer),
        },
      });
    });
  });

  it(`toggleSimilarOfferFavorite ac returns correct action. Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const toggleSimilarOfferFavoriteLoader = PlaceActionCreator.toggleSimilarOfferFavorite(mockedOffer);

    apiMock.onPost(`/favorite/${mockedOffer.id}/${OfferFavoriteStatus.TRUE}`).reply(200, mockedFetchedOffer);

    return toggleSimilarOfferFavoriteLoader(dispatch, jest.fn(), {api}).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: PlaceActionType.UPDATE_SIMILAR_OFFER,
        payload: {
          offer: adaptOfferToClient(mockedFetchedOffer),
        },
      });
    });
  });
});
