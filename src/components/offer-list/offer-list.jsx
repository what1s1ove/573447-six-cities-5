import * as React from 'react';
import PropTypes from 'prop-types';
import OfferItem from '~/components/offer-item/offer-item';

const OfferList = ({offers}) => {
  // eslint-disable-next-line no-unused-vars
  const [activeOffer, setActiveOffer] = React.useState(null);

  const onActiveOfferChange = (offer) => {
    setActiveOffer(offer);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
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
  offers: PropTypes.array.isRequired,
};

export default OfferList;
