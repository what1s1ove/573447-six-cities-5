import {FavoritesActionType} from '~/common/enums/enums';
import {mockedOffers} from '~/mocks/mocks';
import {initialState, favoritesReducer} from './favorites';

describe(`Favorites reducer works correctly`, () => {
  it(`Should return initial state without additional parameters `, () => {
    expect(favoritesReducer(void 0, {})).toEqual(initialState);
  });

  it(`loadFavorites case works correctly`, () => {
    expect(
        favoritesReducer(
            {
              offers: [],
            },
            {
              type: FavoritesActionType.LOAD_FAVORITES,
              payload: {
                offers: mockedOffers,
              },
            }
        )
    ).toEqual({
      offers: mockedOffers,
    });
  });

  it(`updateFavorite case works correctly`, () => {
    expect(
        favoritesReducer(
            {
              offers: [{
                id: 1,
                title: `Title`
              }],
            },
            {
              type: FavoritesActionType.UPDATE_FAVORITE,
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
