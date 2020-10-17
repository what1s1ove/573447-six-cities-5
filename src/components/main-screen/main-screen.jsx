import * as React from 'react';
import PropTypes from 'prop-types';
import {getUniqueOfferCities} from '~/helpers/helpers';
import {offerType, offerCityType} from '~/common/prop-types/prop-types';
import withMap from '~/hocs/with-map/with-map';
import Header from '~/components/header/header';
import Map from '~/components/map/map';
import LocationsList from '~/components/locations-list/locations-list';
import OfferList from '~/components/offer-list/offer-list';
import {getDefaultLocation} from './helpers';

const WrappedMap = withMap(Map);

const MainScreen = ({
  activeOffer,
  offers,
  onActiveOfferChange,
  activeItem: activeLocation,
  onActiveItemChange: onLocationChange,
}) => {
  const uniqueOfferCities = getUniqueOfferCities(offers);

  React.useState(() => {
    const defaultLocation = getDefaultLocation(uniqueOfferCities);

    onLocationChange(defaultLocation);
  }, []);

  if (!activeLocation) {
    return null;
  }

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationsList
          locations={uniqueOfferCities}
          activeLocation={activeLocation}
          onLocationChange={onLocationChange}
        />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offers.length} places to stay in Amsterdam
              </b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <select
                  onChange={() => {}}
                  className="places__sorting-type"
                  value=""
                >
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
              <OfferList
                className="cities__places-list"
                offers={offers}
                onActiveOfferChange={onActiveOfferChange}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <WrappedMap
                  city={activeLocation}
                  activeOffer={activeOffer}
                  offers={offers}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

MainScreen.propTypes = {
  activeItem: offerCityType,
  activeOffer: offerType,
  offers: PropTypes.arrayOf(offerType.isRequired).isRequired,
  onActiveOfferChange: PropTypes.func.isRequired,
  onActiveItemChange: PropTypes.func.isRequired,
};

export default MainScreen;
