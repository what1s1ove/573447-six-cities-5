import * as React from 'react';
import {shallow} from 'enzyme';
import ReviewRating from './review-rating';

describe(`ReviewRating component`, () => {
  it(`should call callback when rating was changed`, () => {
    const handleRatingChange = jest.fn();
    const component = shallow(
        <ReviewRating
          value="value"
          name="name"
          isChecked={false}
          isDisabled={false}
          onRatingChange={handleRatingChange}
        />
    );

    component.find(`.form__rating-input`).simulate(`change`, {
      target: {
        value: `value`,
      },
    });

    expect(handleRatingChange).toHaveBeenCalled();
  });
});
