import * as React from 'react';
import {render} from 'enzyme';
import OfferGalleryList from './offer-gallery-list';

describe(`OfferGalleryList component`, () => {
  it(`should render OfferGalleryList component`, () => {
    const component = render(
        <OfferGalleryList
          imgPaths={[
            `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/5.jpg`,
          ]}
        />
    );

    expect(component).toMatchSnapshot();
  });
});
