import {PlaceActionType} from '~/common/enums/enums';
import {mockedOffers, mockedOffer, mockedReviews} from '~/mocks/mocks';
import {initialState, placeReducer} from './place';

describe(`Place reducer works correctly`, () => {
  it(`Should return initial state without additional parameters `, () => {
    expect(placeReducer(void 0, {})).toEqual(initialState);
  });

  it(`loadOffer case works correctly`, () => {
    expect(
        placeReducer(
            {
              offer: [],
              reviews: [],
              similarOffers: [],
            },
            {
              type: PlaceActionType.LOAD_OFFER,
              payload: {
                offer: mockedOffer,
              },
            }
        )
    ).toEqual({
      offer: mockedOffer,
      reviews: [],
      similarOffers: [],
    });
  });

  it(`loadReviews case works correctly`, () => {
    expect(
        placeReducer(
            {
              offer: [],
              reviews: [],
              similarOffers: [],
            },
            {
              type: PlaceActionType.LOAD_REVIEWS,
              payload: {
                reviews: mockedReviews,
              },
            }
        )
    ).toEqual({
      offer: [],
      reviews: mockedReviews,
      similarOffers: [],
    });
  });

  it(`loadSimilarOffers case works correctly`, () => {
    expect(
        placeReducer(
            {
              offer: [],
              reviews: [],
              similarOffers: [],
            },
            {
              type: PlaceActionType.LOAD_SIMILAR_OFFERS,
              payload: {
                similarOffers: mockedOffers,
              },
            }
        )
    ).toEqual({
      offer: [],
      reviews: [],
      similarOffers: mockedOffers,
    });
  });

  it(`updateSimilarOffer case works correctly`, () => {
    expect(
        placeReducer(
            {
              offer: [],
              reviews: [],
              similarOffers: [{
                id: 1,
                title: `Title`
              }],
            },
            {
              type: PlaceActionType.UPDATE_SIMILAR_OFFER,
              payload: {
                offer: {
                  id: 1,
                  title: `Changed title`
                },
              },
            }
        )
    ).toEqual({
      offer: [],
      reviews: [],
      similarOffers: [{
        id: 1,
        title: `Changed title`
      }],
    });
  });
});
