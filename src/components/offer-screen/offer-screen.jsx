import * as React from 'react';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import {offerType, reviewType} from '~/common/prop-types/prop-types';
import withMap from '~/hocs/with-map/with-map';
import Header from '~/components/header/header';
import Map from '~/components/map/map';
import OfferPropertyDashboard from '~/components/offer-property-dashboard/offer-property-dashboard';
import OfferList from '~/components/offer-list/offer-list';
import OfferGalleryList from '~/components/offer-gallery-list/offer-gallery-list';
import ReviewList from '~/components/review-list/review-list';
import ReviewForm from '~/components/review-form/review-form';
import {getOfferById, getSimilarOffer} from './helpers';

const WrappedMap = withMap(Map);

const OfferScreen = ({offers, activeOffer, reviews, onActiveOfferChange}) => {
  const [offer, setOffer] = React.useState(null);
  const params = useParams();

  React.useEffect(() => {
    const offerById = getOfferById(offers, params.id);

    if (offerById) {
      setOffer(offerById);
      onActiveOfferChange(offerById);
    }
  }, [params.id]);

  if (!offer) {
    return null;
  }

  const similarOffers = getSimilarOffer(offers);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <OfferGalleryList imgPaths={offer.images} />
          <div className="property__container container">
            <div className="property__wrapper">
              <OfferPropertyDashboard offer={offer} />
              <section className="property__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot;
                  <span className="reviews__amount">{reviews.length}</span>
                </h2>
                <ReviewList reviews={reviews} />
                <ReviewForm />
              </section>
            </div>
          </div>
          <section className="property__map map">
            <WrappedMap
              city={offer.city}
              activeOffer={activeOffer}
              offers={similarOffers}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <OfferList
              className="near-places__list"
              offers={similarOffers}
              onActiveOfferChange={onActiveOfferChange}
            />
          </section>
        </div>
      </main>
    </div>
  );
};

OfferScreen.propTypes = {
  activeOffer: offerType,
  offers: PropTypes.arrayOf(offerType.isRequired).isRequired,
  reviews: PropTypes.arrayOf(reviewType.isRequired).isRequired,
  onActiveOfferChange: PropTypes.func.isRequired,
};

export default connect(({places}) => ({
  offers: places.offers,
}))(OfferScreen);
