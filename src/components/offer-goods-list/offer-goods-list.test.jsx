import * as React from 'react';
import {render} from 'enzyme';
import OfferGoodsList from './offer-goods-list';

describe(`OfferGoodsList component`, () => {
  it(`should render OfferGoodsList component`, () => {
    const component = render(<OfferGoodsList goods={[`TV`]} />);

    expect(component).toMatchSnapshot();
  });
});
