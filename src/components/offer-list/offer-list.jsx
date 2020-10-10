import * as React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {offerType} from '~/common/prop-types/prop-types';
import OfferItem from '~/components/offer-item/offer-item';

const OfferList = ({offers, className}) => {
  // eslint-disable-next-line no-unused-vars
  const [activeOffer, setActiveOffer] = React.useState(null);

  const onActiveOfferChange = (offer) => {
    setActiveOffer(offer);
  };

  return (
    <div className={clsx(`places__list`, className)}>
      {offers.map((offer) => (
        <OfferItem
          offer={offer}
          onActiveOfferChange={onActiveOfferChange}
          key={offer.id}
        />
      ))}
    </div>
  );
};

OfferList.propTypes = {
  className: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(offerType).isRequired,
};

export default OfferList;
