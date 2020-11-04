import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '~/services/api/api';
import {adaptOffersToClient, adaptOfferToClient, adaptReviewsToClient} from '~/helpers/helpers';
import {
  mockedOffers,
  mockedOffer,
  mockedFetchedOffers,
  mockedFetchedOffer,
  mockedReviews,
  mockedFetchedReviews,
} from '~/mocks/mocks';
import {FavoritesActionType, OfferFavoriteStatus, PlaceActionType} from '~/common/enums/enums';
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
});
