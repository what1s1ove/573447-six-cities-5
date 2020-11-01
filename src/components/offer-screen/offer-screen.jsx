import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import {offerType} from '~/common/prop-types/prop-types';
import {PlaceActionCreator} from '~/store/actions/actions';
import {
  getOffer,
  getReviews,
  getSimilarOffers,
} from '~/store/selectors/selectors';
import withMap from '~/hocs/with-map/with-map';
import withFormEditing from '~/hocs/with-form-editing/with-form-editing';
import Header from '~/components/header/header';
import Map from '~/components/map/map';
import OfferPropertyDashboard from '~/components/offer-property-dashboard/offer-property-dashboard';
import OfferList from '~/components/offer-list/offer-list';
import OfferGalleryList from '~/components/offer-gallery-list/offer-gallery-list';
import ReviewList from '~/components/review-list/review-list';
import ReviewForm from '~/components/review-form/review-form';

const WrappedMap = withMap(Map);
const WrappedReviewForm = withFormEditing(ReviewForm);

const OfferScreen = ({
  activeItem: activeOffer,
  onActiveItemChange: onActiveOfferChange,
}) => {
  const dispatch = useDispatch();
  const params = useParams();
  const {offer, reviews, similarOffers} = useSelector((state) => ({
    offer: getOffer(state),
    reviews: getReviews(state),
    similarOffers: getSimilarOffers(state),
  }));
  const offerId = params.id;
  const hasSimilarOffer = Boolean(similarOffers.length);

  React.useEffect(() => {
    dispatch(PlaceActionCreator.fetchOffer(offerId));
    dispatch(PlaceActionCreator.fetchReviews(offerId));
    dispatch(PlaceActionCreator.fetchSimilarOffers(offerId));
  }, [offerId]);

  const handleReviewFormSubmit = React.useCallback((review) => {
    dispatch(PlaceActionCreator.uploadReview(offerId, review));
  }, [offerId, dispatch]);

  const handleFavoriteToggle = React.useCallback(() => {
    dispatch(PlaceActionCreator.toggleFavorite(offer));
  }, [offer, dispatch]);

  const handleSimilarOfferFavoriteToggle = React.useCallback((similarOffer) => {
    dispatch(PlaceActionCreator.toggleSimilarOfferFavorite(similarOffer));
  }, [dispatch]);

  if (!offer) {
    return null;
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <OfferGalleryList imgPaths={offer.images} />
          <div className="property__container container">
            <div className="property__wrapper">
              <OfferPropertyDashboard
                offer={offer}
                onFavoriteToggle={handleFavoriteToggle}
              />
              <section className="property__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot;
                  <span className="reviews__amount">{reviews.length}</span>
                </h2>
                <ReviewList reviews={reviews} />
                <WrappedReviewForm
                  onReviewFormSubmit={handleReviewFormSubmit}
                />
              </section>
            </div>
          </div>
          <section className="property__map map">
            {hasSimilarOffer && (
              <WrappedMap
                city={offer.city}
                activeOffer={activeOffer}
                offers={similarOffers}
              />
            )}
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            {hasSimilarOffer && (
              <OfferList
                className="near-places__list"
                offers={similarOffers}
                onActiveOfferChange={onActiveOfferChange}
                onFavoriteToggle={handleSimilarOfferFavoriteToggle}
              />
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

OfferScreen.propTypes = {
  activeItem: offerType,
  onActiveItemChange: PropTypes.func.isRequired,
};

export default OfferScreen;
