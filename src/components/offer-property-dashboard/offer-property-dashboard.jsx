import * as React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {getRatingInPercents} from '~/helpers/helpers';
import {offerType} from '~/common/prop-types/prop-types';
import OfferGoodsList from '~/components/offer-goods-list/offer-goods-list';

const OfferPropertyDashboard = ({offer, onFavoriteToggle}) => (
  <>
    {offer.isPremium && (
      <div className="property__mark">
        <span>Premium</span>
      </div>
    )}
    <div className="property__name-wrapper">
      <h1 className="property__name">{offer.title}</h1>
      <button
        className={clsx(
            `property__bookmark-button button`,
            offer.isFavorite && `property__bookmark-button--active`
        )}
        onClick={onFavoriteToggle}
        type="button"
      >
        <svg className="property__bookmark-icon" width="31" height="33">
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
        <p className="property__text">{offer.description}</p>
      </div>
    </div>
  </>
);

OfferPropertyDashboard.propTypes = {
  offer: offerType.isRequired,
  onFavoriteToggle: PropTypes.func.isRequired,
};

export default OfferPropertyDashboard;
