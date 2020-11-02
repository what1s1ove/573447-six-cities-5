import {PlacesDataActionType} from '~/common/enums/enums';
import {mockedOffers} from '~/mocks/mocks';
import {initialState, placesDataReducer} from './places-data';

describe(`User reducer works correctly`, () => {
  it(`Should return initial state without additional parameters `, () => {
    expect(placesDataReducer(void 0, {})).toEqual(initialState);
  });

  it(`loadOffers case works correctly`, () => {
    expect(
        placesDataReducer(
            {
              offers: [],
            },
            {
              type: PlacesDataActionType.LOAD_OFFERS,
              payload: {
                offers: mockedOffers,
              },
            }
        )
    ).toEqual({
      offers: mockedOffers,
    });
  });

  it(`updateOffer case works correctly`, () => {
    expect(
        placesDataReducer(
            {
              offers: [{
                id: 1,
                title: `Title`
              }],
            },
            {
              type: PlacesDataActionType.UPDATE_OFFER,
              payload: {
                offer: {
                  id: 1,
                  title: `Changed title`
                },
              },
            }
        )
    ).toEqual({
      offers: [{
        id: 1,
        title: `Changed title`
      }],
    });
  });
});
