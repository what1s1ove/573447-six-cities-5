import * as React from 'react';
import {render} from 'enzyme';
import {mockedCity, mockedOffer, mockedOffers} from '~/mocks/mocks';
import withMap from './with-map';

const MockedComponent = () => <div />;
const WrappedMockedComponent = withMap(MockedComponent);

describe(`withMap hoc`, () => {
  it(`should correctly output data from withMap hoc`, () => {
    const wrapper = render(
        <WrappedMockedComponent
          city={mockedCity}
          activeOffer={mockedOffer}
          offers={mockedOffers}
        />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
