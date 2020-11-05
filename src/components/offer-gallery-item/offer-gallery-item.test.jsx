import * as React from 'react';
import {render} from 'enzyme';
import OfferGalleryItem from './offer-gallery-item';

describe(`OfferGalleryItem component`, () => {
  it(`should render OfferGalleryItem component`, () => {
    const component = render(
        <OfferGalleryItem imgPath="https://assets.htmlacademy.ru/intensives/javascript-3/avatar/5.jpg" />
    );

    expect(component).toMatchSnapshot();
  });
});
