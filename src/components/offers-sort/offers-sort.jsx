import * as React from 'react';

const OffersSort = () => (
  <form className="places__sorting" action="#" method="get">
    <span className="places__sorting-caption">Sort by</span>
    <select onChange={() => {}} className="places__sorting-type" value="">
      <option className="places__option" value="popular">
        Popular
      </option>
      <option className="places__option" value="to-high">
        Price: low to high
      </option>
      <option className="places__option" value="to-low">
        Price: high to low
      </option>
      <option className="places__option" value="top-rated">
        Top rated first
      </option>
    </select>
  </form>
);

export default OffersSort;
