import * as React from 'react';
import PropTypes from 'prop-types';

const OfferGoodsItem = ({good}) => (
  <li className="property__inside-item">{good}</li>
);

OfferGoodsItem.propTypes = {
  good: PropTypes.string.isRequired,
};

export default OfferGoodsItem;
