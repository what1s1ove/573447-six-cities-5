import * as React from 'react';
import {render} from 'enzyme';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {store} from '~/mocks/mocks';
import {AppRoute} from '~/common/enums/enums';
import UnPrivateRoute from './un-private-route';

describe(`UnPrivateRoute component`, () => {
  it(`should render UnPrivateRoute component`, () => {
    const component = render(
        <Provider store={store}>
          <MemoryRouter>
            <UnPrivateRoute path={AppRoute.LOGIN} component={null} />
          </MemoryRouter>
        </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
