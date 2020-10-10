import * as React from 'react';
import PropTypes from 'prop-types';

const OfferGalleryItem = ({imgPath}) => (
  <div className="property__image-wrapper">
    <img className="property__image" src={imgPath} alt="Photo studio" />
  </div>
);

OfferGalleryItem.propTypes = {
  imgPath: PropTypes.string.isRequired,
};

export default OfferGalleryItem;
