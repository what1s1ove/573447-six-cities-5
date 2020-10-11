import PropType from 'prop-types';
import {userType} from '~/common/prop-types/user';

const reviewType = PropType.exact({
  user: userType,
  id: PropType.string.isRequired,
  rating: PropType.number.isRequired,
  comment: PropType.string.isRequired,
  date: PropType.object.isRequired,
}).isRequired;

export {reviewType};
