import * as React from 'react';
import {Provider} from 'react-redux';
import {render} from 'enzyme';
import {store} from '~/mocks/mocks';
import Toastr from './toastr';

describe(`Toastr component`, () => {
  it(`should render Toastr component`, () => {
    const component = render(
        <Provider store={store}>
          <Toastr />
        </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
