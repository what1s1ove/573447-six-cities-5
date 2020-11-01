import * as React from 'react';
import {render} from 'enzyme';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {store, mockedOffers} from '~/mocks/mocks';
import FavoriteOffersList from './favorite-offers-list';

describe(`FavoriteOffersList component`, () => {
  it(`should render FavoriteOffersList component`, () => {
    const component = render(
        <Provider store={store}>
          <MemoryRouter>
            <FavoriteOffersList offers={mockedOffers} />
          </MemoryRouter>
        </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
