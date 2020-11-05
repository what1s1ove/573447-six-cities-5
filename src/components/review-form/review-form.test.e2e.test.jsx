import * as React from 'react';
import {shallow} from 'enzyme';
import ReviewForm from './review-form';

describe(`ReviewForm component`, () => {
  it(`should call callback when form was submitted`, () => {
    const handleFormSubmit = jest.fn();
    const component = shallow(
        <ReviewForm
          formState={{}}
          onFormStateChange={jest.fn()}
          onFormReset={jest.fn()}
          onFormSubmit={handleFormSubmit}
        />
    );

    component.find(`.reviews__form`).simulate(`submit`, {
      preventDefault: jest.fn(),
    });

    expect(handleFormSubmit).toHaveBeenCalled();
  });
});
