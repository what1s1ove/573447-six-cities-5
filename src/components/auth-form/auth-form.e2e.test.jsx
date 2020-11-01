import * as React from 'react';
import {shallow} from 'enzyme';
import AuthForm from './auth-form';

describe(`AuthForm component`, () => {
  it(`should call callback when form was submitted`, () => {
    const handleFormSubmit = jest.fn();
    const component = shallow(
        <AuthForm
          formState={{}}
          onFormSubmit={handleFormSubmit}
          onFormStateChange={jest.fn()}
        />
    );

    component.find(`.login__form`).simulate(`submit`, {
      preventDefault: jest.fn(),
    });

    expect(handleFormSubmit).toHaveBeenCalled();
  });
});
