import * as React from 'react';
import {shallow} from 'enzyme';
import {mockedOffer} from '~/mocks/mocks';
import OfferPropertyDashboard from './offer-property-dashboard';

describe(`OfferPropertyDashboard component`, () => {
  it(`should call callback when favorite button was clicked`, () => {
    const handleFavoriteToggle = jest.fn();
    const component = shallow(
        <OfferPropertyDashboard
          offer={mockedOffer}
          onFavoriteToggle={handleFavoriteToggle}
        />
    );

    component.find(`.property__bookmark-button`).simulate(`click`);

    expect(handleFavoriteToggle).toHaveBeenCalled();
  });
});
