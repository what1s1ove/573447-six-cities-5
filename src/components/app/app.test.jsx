import * as React from 'react';
import {render} from 'enzyme';
import {Provider} from 'react-redux';
import {store} from '~/mocks/mocks';
import App from './app';

describe(`App component`, () => {
  it(`should render App component`, () => {
    const component = render(
        <Provider store={store}>
          <App />
        </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
