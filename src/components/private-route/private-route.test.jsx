import * as React from 'react';
import {render} from 'enzyme';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {store} from '~/mocks/mocks';
import {AppRoute} from '~/common/enums/enums';
import PrivateRoute from './private-route';

const PrivateComponent = () => <p>Private Component</p>;

describe(`PrivateRoute component`, () => {
  it(`should render PrivateRoute component`, () => {
    const component = render(
        <Provider store={store}>
          <MemoryRouter>
            <PrivateRoute path={AppRoute.MAIN} component={PrivateComponent} />
          </MemoryRouter>
        </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
