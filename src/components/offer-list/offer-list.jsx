import * as React from 'react';
import PropTypes from 'prop-types';
import OfferItem from '~/components/offer-item/offer-item';

const OfferList = ({offers}) => (
  <div className="cities__places-list places__list tabs__content">
    {offers.map((offer) => (
      <OfferItem offer={offer} key={offer.id} />
    ))}
  </div>
);

OfferList.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default OfferList;
