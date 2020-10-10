import PropType from 'prop-types';
import {userType} from '~/common/prop-types/user';

const commentType = PropType.exact({
  user: userType,
  id: PropType.id.isRequired,
  rating: PropType.number.isRequired,
  comment: PropType.string.isRequired,
  date: PropType.date.isRequired,
}).isRequired;

export {commentType};
