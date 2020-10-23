import * as React from 'react';
import PropTypes from 'prop-types';
import {SortType} from '~/common/enums/enums';

const OffersSort = ({activeSort, sorts, onSortChange}) => {
  const handleSortChange = ({target}) => onSortChange(target.value);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <select
        className="places__sorting-type"
        onChange={handleSortChange}
        value={activeSort}
      >
        {sorts.map((sort) => (
          <option className="places__option" value={sort} key={sort}>
            {sort}
          </option>
        ))}
      </select>
    </form>
  );
};

OffersSort.propTypes = {
  activeSort: PropTypes.oneOf(Object.values(SortType)).isRequired,
  sorts: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onSortChange: PropTypes.func.isRequired,
};

export default OffersSort;
