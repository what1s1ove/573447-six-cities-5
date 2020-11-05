import * as React from 'react';
import {render} from 'enzyme';
import {mockedCity} from '~/mocks/mocks';
import LocationsList from './locations-list';

describe(`LocationsList component`, () => {
  it(`should render LocationsList component`, () => {
    const component = render(
        <LocationsList
          locations={[`Amsterdam`]}
          activeLocation={mockedCity}
          onLocationChange={jest.fn()}
        />
    );

    expect(component).toMatchSnapshot();
  });
});
