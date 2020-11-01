import * as React from 'react';
import {shallow} from 'enzyme';
import {mockedOffer} from '~/mocks/mocks';
import withActiveItem from './with-active-item';

const MockedComponent = () => <div />;
const WrappedMockedComponent = withActiveItem(MockedComponent);

describe(`withActiveItem hoc`, () => {
  it(`should correctly set active item`, () => {
    const handleActiveItemChange = jest.fn();
    const wrapper = shallow(
        <WrappedMockedComponent
          activeItem={null}
          onActiveItemChange={handleActiveItemChange}
        />
    );

    expect(wrapper.props().activeItem).toBeNull();

    wrapper.props().onActiveItemChange(mockedOffer);

    expect(handleActiveItemChange).toHaveBeenCalled();

    expect(wrapper.props().activeItem).toBe(mockedOffer);
  });
});
