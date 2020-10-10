import * as React from 'react';
import PropTypes, {string} from 'prop-types';
import OfferList from '../offer-list/offer-list';

const OfferGalleryList = ({imgPaths}) => (
  <div className="property__gallery-container container">
    <div className="property__gallery">
      <div className="property__image-wrapper">
        <img
          className="property__image"
          src="img/room.jpg"
          alt="Photo studio"
        />
      </div>
      <div className="property__image-wrapper">
        <img
          className="property__image"
          src="img/apartment-01.jpg"
          alt="Photo studio"
        />
      </div>
      <div className="property__image-wrapper">
        <img
          className="property__image"
          src="img/apartment-02.jpg"
          alt="Photo studio"
        />
      </div>
      <div className="property__image-wrapper">
        <img
          className="property__image"
          src="img/apartment-03.jpg"
          alt="Photo studio"
        />
      </div>
      <div className="property__image-wrapper">
        <img
          className="property__image"
          src="img/studio-01.jpg"
          alt="Photo studio"
        />
      </div>
      <div className="property__image-wrapper">
        <img
          className="property__image"
          src="img/apartment-01.jpg"
          alt="Photo studio"
        />
      </div>
    </div>
  </div>
);

OfferList.propTypes = {
  imgPaths: PropTypes.arrayOf(string.isRequired).isRequired,
};

export default OfferGalleryList;
