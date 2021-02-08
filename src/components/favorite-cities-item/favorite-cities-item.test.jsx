import * as React from 'react';
import {render} from 'enzyme';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {store, mockedCity, mockedOffers} from '~/mocks/mocks';
import FavoriteCitiesItem from './favorite-cities-item';

describe(`FavoriteCitiesItem component`, () => {
  it(`should render FavoriteCitiesItem component`, () => {
    const component = render(
        <Provider store={store}>
          <MemoryRouter>
            <FavoriteCitiesItem city={mockedCity} offers={mockedOffers} />
          </MemoryRouter>
        </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
