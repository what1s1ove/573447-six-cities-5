import * as React from 'react';
import {render} from 'enzyme';
import {MemoryRouter} from 'react-router-dom';
import {mockedOffer} from '~/mocks/mocks';
import FavoriteOffersItem from './favorite-offers-item';

describe(`FavoriteOffersItem component`, () => {
  it(`should render FavoriteOffersItem component`, () => {
    const component = render(
        <MemoryRouter>
          <FavoriteOffersItem offer={mockedOffer} onFavoriteToggle={jest.fn()} />
        </MemoryRouter>
    );

    expect(component).toMatchSnapshot();
  });
});
