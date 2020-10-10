import * as React from 'react';
import PropTypes from 'prop-types';

const OfferGoodsList = ({goods}) => (
  <div className="property__gallery-container container">
    <div className="property__gallery">
      {cutImgPaths.map((imgPath, idx) => (
        <OfferGalleryItem imgPath={imgPath} key={`${imgPath}-${idx}`} />
      ))}
    </div>
  </div>
);

OfferGoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default OfferGoodsList;
