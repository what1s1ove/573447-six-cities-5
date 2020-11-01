import * as React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {render} from 'enzyme';
import {mockedOffers} from '~/mocks/mocks';
import OfferList from './offer-list';

describe(`OfferList component`, () => {
  it(`should render OfferList component`, () => {
    const component = render(
        <MemoryRouter>
          <OfferList
            className=""
            offers={mockedOffers}
            onActiveOfferChange={jest.fn()}
            onFavoriteToggle={jest.fn()}
          />
        </MemoryRouter>
    );

    expect(component).toMatchSnapshot();
  });
});
