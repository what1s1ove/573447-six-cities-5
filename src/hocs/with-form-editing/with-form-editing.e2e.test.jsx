import * as React from 'react';
import {shallow} from 'enzyme';
import withFormEditing from './with-form-editing';

const MockedComponent = () => <div />;
const WrappedMockedComponent = withFormEditing(MockedComponent);

describe(`withFormEditing hoc`, () => {
  it(`should correctly change form state`, () => {
    const wrapper = shallow(
        <WrappedMockedComponent
          formState={{}}
          onFormStateChange={jest.fn()}
          onFormReset={jest.fn()}
        />
    );

    expect(wrapper.props().formState).toMatchObject({});

    wrapper.props().onFormStateChange(`key`, `value`);

    expect(wrapper.props().formState).toMatchObject({
      key: `value`
    });
  });

  it(`should correctly reset form state`, () => {
    const wrapper = shallow(
        <WrappedMockedComponent
          formState={{}}
          onFormStateChange={jest.fn()}
          onFormReset={jest.fn()}
        />
    );

    expect(wrapper.props().formState).toMatchObject({});

    wrapper.props().onFormStateChange(`key`, `value`);

    expect(wrapper.props().formState).toMatchObject({
      key: `value`
    });

    wrapper.props().onFormReset();

    expect(wrapper.props().formState).toMatchObject({});
  });
});
