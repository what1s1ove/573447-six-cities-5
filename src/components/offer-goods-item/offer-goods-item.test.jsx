import * as React from 'react';
import {render} from 'enzyme';
import OfferGoodsItem from './offer-goods-item';

describe(`OfferGoodsItem component`, () => {
  it(`should render OfferGoodsItem component`, () => {
    const component = render(<OfferGoodsItem good="TV" />);

    expect(component).toMatchSnapshot();
  });
});
