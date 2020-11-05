import * as React from 'react';
import {render} from 'enzyme';
import Map from './map';

describe(`Map component`, () => {
  it(`should render Map component`, () => {
    const component = render(<Map renderMap={jest.fn()} />);

    expect(component).toMatchSnapshot();
  });
});
