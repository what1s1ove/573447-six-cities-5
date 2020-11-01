import * as React from 'react';
import {render} from 'enzyme';
import ReviewForm from './review-form';

describe(`ReviewForm component`, () => {
  it(`should render ReviewForm component`, () => {
    const component = render(
        <ReviewForm
          formState={{}}
          onFormStateChange={jest.fn()}
          onFormReset={jest.fn()}
          onReviewFormSubmit={jest.fn()}
        />
    );

    expect(component).toMatchSnapshot();
  });
});
