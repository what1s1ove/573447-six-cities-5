import * as React from 'react';
import {render} from 'enzyme';
import {mockedCity} from '~/mocks/mocks';
import MainScreenEmptyPlaceholder from './main-screen-empty-placeholder';

describe(`MainScreenEmptyPlaceholder component`, () => {
  it(`should render MainScreenEmptyPlaceholder component`, () => {
    const component = render(
        <MainScreenEmptyPlaceholder location={mockedCity} />
    );

    expect(component).toMatchSnapshot();
  });
});
