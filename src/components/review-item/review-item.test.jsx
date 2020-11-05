import * as React from 'react';
import {render} from 'enzyme';
import {mockedReview} from '~/mocks/mocks';
import ReviewItem from './review-item';

describe(`ReviewItem component`, () => {
  it(`should render ReviewItem component`, () => {
    const component = render(<ReviewItem review={mockedReview} />);

    expect(component).toMatchSnapshot();
  });
});
