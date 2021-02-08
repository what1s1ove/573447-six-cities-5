import * as React from 'react';
import PropTypes from 'prop-types';
import OfferGalleryItem from '~/components/offer-gallery-item/offer-gallery-item';

const MAX_IMG_COUNT = 6;

const OfferGalleryList = ({imgPaths}) => {
  const cutImgPaths = imgPaths.slice(0, MAX_IMG_COUNT);

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {cutImgPaths.map((imgPath) => (
          <OfferGalleryItem imgPath={imgPath} key={imgPath} />
        ))}
      </div>
    </div>
  );
};

OfferGalleryList.propTypes = {
  imgPaths: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default OfferGalleryList;
