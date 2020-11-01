import * as React from 'react';
import {render} from 'enzyme';
import {mockedReviews} from '~/mocks/mocks';
import ReviewList from './review-list';

describe(`ReviewList component`, () => {
  it(`should render ReviewList component`, () => {
    const component = render(<ReviewList reviews={mockedReviews} />);

    expect(component).toMatchSnapshot();
  });
});
