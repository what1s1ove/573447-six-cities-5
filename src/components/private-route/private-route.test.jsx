import * as React from 'react';
import {render} from 'enzyme';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {store} from '~/mocks/mocks';
import PrivateRoute from './private-route';

describe(`PrivateRoute component`, () => {
  it(`should render PrivateRoute component`, () => {
    const component = render(
        <Provider store={store}>
          <MemoryRouter>
            <PrivateRoute />
          </MemoryRouter>
        </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
