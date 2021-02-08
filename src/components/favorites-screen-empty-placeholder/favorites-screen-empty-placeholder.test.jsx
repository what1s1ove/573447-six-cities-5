import * as React from 'react';
import {render} from 'enzyme';
import FavoritesScreenEmptyPlaceholder from './favorites-screen-empty-placeholder';

describe(`FavoritesScreenEmptyPlaceholder component`, () => {
  it(`should render FavoritesScreenEmptyPlaceholder component`, () => {
    const component = render(<FavoritesScreenEmptyPlaceholder />);

    expect(component).toMatchSnapshot();
  });
});
