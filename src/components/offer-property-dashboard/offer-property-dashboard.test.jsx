import * as React from 'react';
import {render} from 'enzyme';
import {mockedOffer} from '~/mocks/mocks';
import OfferPropertyDashboard from './offer-property-dashboard';

describe(`OfferPropertyDashboard component`, () => {
  it(`should render OfferPropertyDashboard component`, () => {
    const component = render(
        <OfferPropertyDashboard
          offer={mockedOffer}
          onFavoriteToggle={jest.fn()}
        />
    );

    expect(component).toMatchSnapshot();
  });
});
