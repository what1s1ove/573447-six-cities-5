import * as React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {render} from 'enzyme';
import {mockedOffer} from '~/mocks/mocks';
import OfferItem from './offer-item';

describe(`OfferItem component`, () => {
  it(`should render OfferItem component`, () => {
    const component = render(
        <MemoryRouter>
          <OfferItem
            offer={mockedOffer}
            onActiveOfferChange={jest.fn()}
            onFavoriteToggle={jest.fn()}
          />
        </MemoryRouter>
    );

    expect(component).toMatchSnapshot();
  });
});
