import * as React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {offerType} from '~/common/prop-types/prop-types';
import OfferItem from '~/components/offer-item/offer-item';

const OfferList = ({
  offers,
  className,
  onActiveOfferChange,
  onFavoriteToggle,
}) => {
  const handleActiveOfferChange = (offer) => {
    if (onActiveOfferChange) {
      onActiveOfferChange(offer);
    }
  };

  return (
    <div className={clsx(`places__list`, className)}>
      {offers.map((offer) => (
        <OfferItem
          offer={offer}
          onActiveOfferChange={handleActiveOfferChange}
          onFavoriteToggle={onFavoriteToggle}
          key={offer.id}
        />
      ))}
    </div>
  );
};

OfferList.propTypes = {
  className: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(offerType.isRequired).isRequired,
  onFavoriteToggle: PropTypes.func.isRequired,
  onActiveOfferChange: PropTypes.func,
};

export default OfferList;
