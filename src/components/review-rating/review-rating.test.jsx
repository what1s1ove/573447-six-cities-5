import * as React from 'react';
import {render} from 'enzyme';
import ReviewRating from './review-rating';

describe(`ReviewRating component`, () => {
  it(`should render ReviewRating component`, () => {
    const component = render(
        <ReviewRating
          value="value"
          name="name"
          isChecked={false}
          onRatingChange={jest.fn()}
        />
    );

    expect(component).toMatchSnapshot();
  });
});
