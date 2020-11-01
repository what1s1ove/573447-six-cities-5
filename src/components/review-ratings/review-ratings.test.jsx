import * as React from 'react';
import {render} from 'enzyme';
import ReviewRatings from './review-ratings';

describe(`ReviewRatings component`, () => {
  it(`should render ReviewRatings component`, () => {
    const component = render(
        <ReviewRatings currentRating="value" onRatingChange={jest.fn()} />
    );

    expect(component).toMatchSnapshot();
  });
});
