import PropTypes from 'prop-types';
import {OfferCity} from '~/common/enums/enums';
import {locationType} from '~/common/prop-types/location.prop-types';

const offerCityType = PropTypes.exact({
  location: locationType.isRequired,
  name: PropTypes.oneOf([
    OfferCity.AMSTERDAM,
    OfferCity.BRUSSELS,
    OfferCity.COLOGNE,
    OfferCity.DUSSELDORF,
    OfferCity.HAMBURG,
    OfferCity.PARIS,
  ]).isRequired,
});

export {offerCityType};
