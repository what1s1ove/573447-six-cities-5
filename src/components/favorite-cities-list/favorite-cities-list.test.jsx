import * as React from 'react';
import {render} from 'enzyme';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {store, mockedOffers} from '~/mocks/mocks';
import FavoriteCitiesList from './favorite-cities-list';

describe(`FavoriteCitiesList component`, () => {
  it(`should render FavoriteCitiesList component`, () => {
    const component = render(
        <Provider store={store}>
          <MemoryRouter>
            <FavoriteCitiesList offers={mockedOffers} />
          </MemoryRouter>
        </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
