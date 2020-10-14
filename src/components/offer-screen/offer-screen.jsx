import * as React from 'react';
import {useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {offerType, reviewType} from '~/common/prop-types/prop-types';
import {getRatingInPercents} from '~/helpers/helpers';
import withMap from '~/hocs/with-map/with-map';
import Header from '~/components/header/header';
import Map from '~/components/map/map';
import OfferList from '~/components/offer-list/offer-list';
import OfferGalleryList from '~/components/offer-gallery-list/offer-gallery-list';
import OfferGoodsList from '~/components/offer-goods-list/offer-goods-list';
import ReviewList from '~/components/review-list/review-list';
import ReviewForm from '~/components/review-form/review-form';
import {getOfferById, getSimilarOffer} from './helpers';

const WrappedMap = withMap(Map);

const OfferScreen = ({offers, reviews}) => {
  const [offer, setOffer] = React.useState(null);
  const params = useParams();

  React.useEffect(() => {
    const offerById = getOfferById(offers, params.id) || null;

    setOffer(offerById);
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
              {offer.isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">{offer.title}</h1>
                <button
                  className="property__bookmark-button button"
                  type="button"
                >
                  <svg
                    className="property__bookmark-icon"
                    width="31"
                    height="33"
                  >
                    <use href="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span
                    style={{
                      width: `${getRatingInPercents(offer.rating)}%`,
                    }}
                  />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {offer.rating}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedroomCount} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.maxAdultsCount} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <OfferGoodsList goods={offer.goods} />
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div
                    className={clsx(
                        `property__avatar-wrapper user__avatar-wrapper`,
                        offer.host.isPro && `property__avatar-wrapper--pro`
                    )}
                  >
                    <img
                      className="property__avatar user__avatar"
                      src={offer.host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">{offer.host.name}</span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
                </h2>
                <ReviewList reviews={reviews} />
                <ReviewForm />
              </section>
            </div>
          </div>
          <section className="property__map map">
            <WrappedMap city={offer.city} activeOffer={offer} offers={similarOffers} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <OfferList className="near-places__list" offers={similarOffers} />
          </section>
        </div>
      </main>
    </div>
  );
};

OfferScreen.propTypes = {
  offers: PropTypes.arrayOf(offerType.isRequired).isRequired,
  reviews: PropTypes.arrayOf(reviewType.isRequired).isRequired,
};

export default OfferScreen;
