import * as React from 'react';
import {shallow} from 'enzyme';
import LocationsItem from './locations-item';

describe(`LocationsItem component`, () => {
  it(`should call callback when location button was clicked`, () => {
    const handleLocationChange = jest.fn();
    const component = shallow(
        <LocationsItem
          location="Amsterdam"
          isActive={false}
          onLocationChange={handleLocationChange}
        />
    );

    component.find(`.locations__item-link`).simulate(`click`);

    expect(handleLocationChange).toHaveBeenCalled();
  });
});
