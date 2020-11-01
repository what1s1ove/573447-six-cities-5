import * as React from 'react';
import {render} from 'enzyme';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {store, mockedOffer} from '~/mocks/mocks';
import OfferScreen from './offer-screen';

describe(`OfferScreen component`, () => {
  it(`should render OfferScreen component`, () => {
    const component = render(
        <Provider store={store}>
          <MemoryRouter>
            <OfferScreen activeItem={mockedOffer} onActiveItemChange={jest.fn()} />
          </MemoryRouter>
        </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
