import * as React from 'react';
import PropTypes from 'prop-types';
import OfferGoodsItem from '~/components/offer-goods-item/offer-goods-item';

const OfferGoodsList = ({goods}) => (
  <ul className="property__inside-list">
    {goods.map((good) => (
      <OfferGoodsItem good={good} key={good} />
    ))}
  </ul>
);

OfferGoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default OfferGoodsList;
