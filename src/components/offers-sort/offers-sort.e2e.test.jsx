import * as React from 'react';
import {shallow} from 'enzyme';
import {SortType} from '~/common/enums/enums';
import OffersSort from './offers-sort';

describe(`OffersSort component`, () => {
  it(`should call callback when sort changes`, () => {
    const handleSortChange = jest.fn();
    const component = shallow(
        <OffersSort
          activeSort={SortType.POPULAR}
          sorts={Object.values(SortType)}
          onSortChange={handleSortChange}
        />
    );

    component.find(`.places__sorting-type`).simulate(`change`, {
      target: {
        value: SortType.POPULAR,
      },
    });

    expect(handleSortChange).toHaveBeenCalled();
  });
});
