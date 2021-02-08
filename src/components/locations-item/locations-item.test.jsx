import * as React from 'react';
import {render} from 'enzyme';
import LocationsItem from './locations-item';

describe(`LocationsItem component`, () => {
  it(`should render LocationsItem component`, () => {
    const component = render(
        <LocationsItem
          location="Amsterdam"
          isActive={false}
          onLocationChange={jest.fn()}
        />
    );

    expect(component).toMatchSnapshot();
  });
});
