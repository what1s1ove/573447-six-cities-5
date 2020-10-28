import * as React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {SortType} from '~/common/enums/enums';
import {offerType} from '~/common/prop-types/prop-types';
import withMap from '~/hocs/with-map/with-map';
import Header from '~/components/header/header';
import OffersSort from '~/components/offers-sort/offers-sort';
import Map from '~/components/map/map';
import LocationsList from '~/components/locations-list/locations-list';
import OfferList from '~/components/offer-list/offer-list';
import MainScreenEmptyPlaceholder from '~/components/main-screen-empty-placeholder/main-screen-empty-placeholder';
import {
  getDefaultLocation,
  getSortedLocations,
  getFilteredOffers,
} from './helpers';

const sortTypes = Object.values(SortType);

const WrappedMap = withMap(Map);

const MainScreen = ({
  activeItem: activeOffer,
  onActiveItemChange: onActiveOfferChange,
}) => {
  const {offers, locations} = useSelector(({places}) => ({
    offers: places.offers,
    locations: getSortedLocations(places.locations),
  }));

  const [activeSort, setActiveSort] = React.useState(SortType.POPULAR);
  const [currentLocation, setCurrentLocation] = React.useState(getDefaultLocation(locations));

  const filteredOffers = getFilteredOffers(offers, currentLocation, activeSort);
  const hasOffers = Boolean(offers.length);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main
        className={clsx(
            `page__main page__main--index`,
            !hasOffers && `page__main--index-empty`
        )}
      >
        <h1 className="visually-hidden">Cities</h1>
        <LocationsList
          locations={locations}
          activeLocation={currentLocation}
          onLocationChange={setCurrentLocation}
        />
        <div className="cities">
          <div
            className={clsx(
                `cities__places-container container`,
                !hasOffers && `cities__places-container--empty`
            )}
          >
            {hasOffers ? (
              <>
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">
                    {filteredOffers.length} places to stay in
                    {currentLocation.name}
                  </b>
                  <OffersSort
                    activeSort={activeSort}
                    sorts={sortTypes}
                    onSortChange={setActiveSort}
                  />
                  <OfferList
                    className="cities__places-list"
                    offers={filteredOffers}
                    onActiveOfferChange={onActiveOfferChange}
                  />
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <WrappedMap
                      city={currentLocation}
                      activeOffer={activeOffer}
                      offers={filteredOffers}
                    />
                  </section>
                </div>
              </>
            ) : (
              <MainScreenEmptyPlaceholder location={currentLocation} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

MainScreen.propTypes = {
  activeItem: offerType,
  onActiveItemChange: PropTypes.func.isRequired,
};

export default MainScreen;
