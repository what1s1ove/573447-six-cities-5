import * as React from 'react';
import {render} from 'enzyme';
import Map from './map';

describe(`Map component`, () => {
  it(`should render Map component`, () => {
    const handleMapRender = () => <p>Map</p>;
    const component = render(<Map renderMap={handleMapRender} />);

    expect(component).toMatchSnapshot();
  });
});
