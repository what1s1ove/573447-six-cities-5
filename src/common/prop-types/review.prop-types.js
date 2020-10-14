import PropType from 'prop-types';
import {userType} from '~/common/prop-types/user.prop-types';

const reviewType = PropType.exact({
  user: userType.isRequired,
  comment: PropType.string.isRequired,
  date: PropType.object.isRequired,
  id: PropType.string.isRequired,
  rating: PropType.number.isRequired,
});

export {reviewType};
