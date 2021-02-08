import * as React from 'react';
import {render} from 'enzyme';
import AuthForm from './auth-form';

describe(`AuthForm component`, () => {
  it(`should render AuthForm component`, () => {
    const component = render(
        <AuthForm
          formState={{}}
          onFormSubmit={jest.fn()}
          onFormStateChange={jest.fn()}
        />
    );

    expect(component).toMatchSnapshot();
  });
});
