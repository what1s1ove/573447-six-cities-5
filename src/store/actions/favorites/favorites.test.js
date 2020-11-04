import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '~/services/api/api';
import {adaptOffersToClient, adaptOfferToClient} from '~/helpers/helpers';
import {
  mockedOffers,
  mockedOffer,
  mockedFetchedOffers,
  mockedFetchedOffer,
} from '~/mocks/mocks';
import {FavoritesActionType, OfferFavoriteStatus} from '~/common/enums/enums';
import {FavoritesActionCreator} from './favorites';

const api = createAPI({
  onUnauthorized: jest.fn(),
});

describe(`Favorites creator works correctly`, () => {
  it(`loadFavorites ac returns correct action`, () => {
    expect(FavoritesActionCreator.loadFavorites(mockedOffers)).toEqual({
      type: FavoritesActionType.LOAD_FAVORITES,
      payload: {
        offers: mockedOffers,
      },
    });
  });

  it(`updateFavorite ac returns correct action`, () => {
    expect(FavoritesActionCreator.updateFavorite(mockedOffer)).toEqual({
      type: FavoritesActionType.UPDATE_FAVORITE,
      payload: {
        offer: mockedOffer,
      },
    });
  });

  it(`fetchFavorites ac returns correct action. Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchFavoritesLoader = FavoritesActionCreator.fetchFavorites();

    apiMock.onGet(`/favorite`).reply(200, mockedFetchedOffers);

    return fetchFavoritesLoader(dispatch, jest.fn(), {api}).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: FavoritesActionType.LOAD_FAVORITES,
        payload: {
          offers: adaptOffersToClient(mockedFetchedOffers),
        },
      });
    });
  });

  it(`toggleFavorite ac returns correct action. Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const toggleFavoriteLoader = FavoritesActionCreator.toggleFavorite(mockedOffer);

    apiMock
      .onPost(`/favorite/${mockedOffer.id}/${OfferFavoriteStatus.TRUE}`)
      .reply(200, mockedFetchedOffer);

    return toggleFavoriteLoader(dispatch, jest.fn(), {api}).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: FavoritesActionType.UPDATE_FAVORITE,
        payload: {
          offer: adaptOfferToClient(mockedFetchedOffer),
        },
      });
    });
  });
});
