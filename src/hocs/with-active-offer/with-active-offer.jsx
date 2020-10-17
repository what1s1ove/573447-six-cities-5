import * as React from 'react';
import PropTypes from 'prop-types';
import {offerType} from '~/common/prop-types/prop-types';
import withActiveItem from '~/hocs/with-active-item/with-active-item';

const withActiveOffer = (Component) => {
  const WithActiveOffer = (props) => {
    const {activeItem, onActiveItemChange} = props;
    const restProps = Object.assign({}, props);

    delete restProps.activeItem;
    delete restProps.onActiveItemChange;

    const onActiveOfferChange = (item) => {
      onActiveItemChange(item);
    };

    return (
      <Component
        {...restProps}
        activeOffer={activeItem}
        onActiveOfferChange={onActiveOfferChange}
      />
    );
  };

  WithActiveOffer.propTypes = {
    activeItem: offerType,
    onActiveItemChange: PropTypes.func.isRequired,
  };

  return withActiveItem(WithActiveOffer);
};

export default withActiveOffer;
