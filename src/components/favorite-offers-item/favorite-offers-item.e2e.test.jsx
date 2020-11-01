import * as React from 'react';
import {shallow} from 'enzyme';
import {mockedOffer} from '~/mocks/mocks';
import FavoriteOffersItem from './favorite-offers-item';

describe(`FavoriteOffersItem component`, () => {
  it(`should call callback when from favorite button was clicked`, () => {
    const handleFavoriteToggle = jest.fn();
    const component = shallow(
        <FavoriteOffersItem
          offer={mockedOffer}
          onFavoriteToggle={handleFavoriteToggle}
        />
    );

    component.find(`.place-card__bookmark-button`).simulate(`click`);

    expect(handleFavoriteToggle).toHaveBeenCalled();
  });
});
