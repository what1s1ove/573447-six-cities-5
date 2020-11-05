import * as React from 'react';
import {render} from 'enzyme';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {store, mockedOffer} from '~/mocks/mocks';
import MainScreen from './main-screen';

describe(`MainScreen component`, () => {
  it(`should render MainScreen component`, () => {
    const component = render(
        <Provider store={store}>
          <MemoryRouter>
            <MainScreen activeItem={mockedOffer} onActiveItemChange={jest.fn()} />
          </MemoryRouter>
        </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
