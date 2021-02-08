import * as React from 'react';
import {offerCityType} from '~/common/prop-types/prop-types';

const MainScreenEmptyPlaceholder = ({location}) => (
  <>
    <section className="cities__no-places">
      <div className="cities__status-wrapper tabs__content">
        <b className="cities__status">No places to stay available</b>
        <p className="cities__status-description">
          We could not find any property available at the moment
          {location ? `in ${location.name}` : ``}
        </p>
      </div>
    </section>
    <div className="cities__right-section" />
  </>
);

MainScreenEmptyPlaceholder.propTypes = {
  location: offerCityType,
};

export default MainScreenEmptyPlaceholder;
