import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '~/services/api/api';
import {adaptOffersToClient, adaptOfferToClient} from '~/helpers/helpers';
import {mockedOffer, mockedOffers, mockedFetchedOffers, mockedFetchedOffer} from '~/mocks/mocks';
import {OfferFavoriteStatus, PlacesDataActionType} from '~/common/enums/enums';
import {PlacesDataActionCreator} from './places-data';

const api = createAPI({
  onUnauthorized: jest.fn(),
});

describe(`Place data action creator works correctly`, () => {
  it(`loadOffers ac returns correct action`, () => {
    expect(PlacesDataActionCreator.loadOffers(mockedOffers)).toEqual({
      type: PlacesDataActionType.LOAD_OFFERS,
      payload: {
        offers: mockedOffers,
      },
    });
  });

  it(`updateOffer ac returns correct action`, () => {
    expect(PlacesDataActionCreator.updateOffer(mockedOffer)).toEqual({
      type: PlacesDataActionType.UPDATE_OFFER,
      payload: {
        offer: mockedOffer,
      },
    });
  });

  it(`fetchOffers ac returns correct action. Should make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchOffersLoader = PlacesDataActionCreator.fetchOffers();

    apiMock.onGet(`/hotels`).reply(200, mockedFetchedOffers);

    return fetchOffersLoader(dispatch, jest.fn(), {api}).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: PlacesDataActionType.LOAD_OFFERS,
        payload: {
          offers: adaptOffersToClient(mockedFetchedOffers),
        },
      });
    });
  });

  it(`toggleFavorite ac returns correct action. Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const toggleFavoriteLoader = PlacesDataActionCreator.toggleFavorite(mockedOffer);

    apiMock.onPost(`/favorite/${mockedOffer.id}/${OfferFavoriteStatus.TRUE}`).reply(200, mockedFetchedOffer);

    return toggleFavoriteLoader(dispatch, jest.fn(), {api}).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: PlacesDataActionType.UPDATE_OFFER,
        payload: {
          offer: adaptOfferToClient(mockedFetchedOffer),
        },
      });
    });
  });
});
