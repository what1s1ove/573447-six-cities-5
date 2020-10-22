import * as React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {getOffersByCity} from '~/helpers/offer';
import {offerType, offerCityType} from '~/common/prop-types/prop-types';
import withMap from '~/hocs/with-map/with-map';
import Header from '~/components/header/header';
import OffersSort from '~/components/offers-sort/offers-sort';
import Map from '~/components/map/map';
import LocationsList from '~/components/locations-list/locations-list';
import OfferList from '~/components/offer-list/offer-list';
import {getDefaultLocation, getSortedLocations} from './helpers';

const WrappedMap = withMap(Map);

const MainScreen = ({
  activeOffer,
  onActiveOfferChange,
  activeItem: activeLocation,
  onActiveItemChange: onLocationChange,
}) => {
  const {offers, locations} = useSelector(({places}) => ({
    offers: places.offers,
    locations: getSortedLocations(places.locations),
  }));

  const localOffers = activeLocation
    ? getOffersByCity(offers, activeLocation)
    : offers;

  React.useState(() => {
    const defaultLocation = getDefaultLocation(locations);

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
          locations={locations}
          activeLocation={activeLocation}
          onLocationChange={onLocationChange}
        />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {localOffers.length} places to stay in {activeLocation.name}
              </b>
              <OffersSort />
              <OfferList
                className="cities__places-list"
                offers={localOffers}
                onActiveOfferChange={onActiveOfferChange}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <WrappedMap
                  city={activeLocation}
                  activeOffer={activeOffer}
                  offers={localOffers}
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
  onActiveOfferChange: PropTypes.func.isRequired,
  onActiveItemChange: PropTypes.func.isRequired,
};

export default MainScreen;
