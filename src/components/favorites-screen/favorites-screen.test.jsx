import * as React from 'react';
import {render} from 'enzyme';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {store} from '~/mocks/mocks';
import FavoritesScreen from './favorites-screen';

describe(`FavoritesScreen component`, () => {
  it(`should render FavoritesScreen component`, () => {
    const component = render(
        <Provider store={store}>
          <MemoryRouter>
            <FavoritesScreen />
          </MemoryRouter>
        </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
