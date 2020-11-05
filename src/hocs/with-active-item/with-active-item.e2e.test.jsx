import * as React from 'react';
import {shallow} from 'enzyme';
import {mockedOffer} from '~/mocks/mocks';
import withActiveItem from './with-active-item';

const MockedComponent = () => <div />;
const WrappedMockedComponent = withActiveItem(MockedComponent);

describe(`withActiveItem hoc`, () => {
  it(`should correctly set active item`, () => {
    const wrapper = shallow(
        <WrappedMockedComponent
          activeItem={null}
          onActiveItemChange={jest.fn()}
        />
    );

    expect(wrapper.props().activeItem).toBeNull();

    wrapper.props().onActiveItemChange(mockedOffer);

    expect(wrapper.props().activeItem).toBe(mockedOffer);
  });
});
