import * as React from 'react';
import {render} from 'enzyme';
import {SortType} from '~/common/enums/enums';
import OffersSort from './offers-sort';

describe(`OffersSort component`, () => {
  it(`should render OffersSort component`, () => {
    const component = render(
        <OffersSort
          activeSort={SortType.POPULAR}
          sorts={Object.values(SortType)}
          onSortChange={jest.fn()}
        />
    );

    expect(component).toMatchSnapshot();
  });
});
