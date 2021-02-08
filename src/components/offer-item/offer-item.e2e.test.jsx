import * as React from 'react';
import {shallow} from 'enzyme';
import {mockedOffer} from '~/mocks/mocks';
import OfferItem from './offer-item';

describe(`OfferItem component`, () => {
  it(`should call callback when mouse over on component`, () => {
    const handleMouseOver = jest.fn();
    const component = shallow(
        <OfferItem
          offer={mockedOffer}
          onActiveOfferChange={handleMouseOver}
          onFavoriteToggle={jest.fn()}
        />
    );

    component.simulate(`mouseover`);

    expect(handleMouseOver).toHaveBeenCalled();
  });

  it(`should call callback when mouse out from component`, () => {
    const handleMouseOut = jest.fn();
    const component = shallow(
        <OfferItem
          offer={mockedOffer}
          onActiveOfferChange={handleMouseOut}
          onFavoriteToggle={jest.fn()}
        />
    );

    component.simulate(`mouseout`);

    expect(handleMouseOut).toHaveBeenCalled();
  });

  it(`should call callback when favorite button was clicked`, () => {
    const handleFavoriteToggle = jest.fn();
    const component = shallow(
        <OfferItem
          offer={mockedOffer}
          onActiveOfferChange={jest.fn()}
          onFavoriteToggle={handleFavoriteToggle}
        />
    );

    component.find(`.place-card__bookmark-button`).simulate(`click`);

    expect(handleFavoriteToggle).toHaveBeenCalled();
  });
});
