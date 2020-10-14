import * as React from 'react';
import PropTypes from 'prop-types';
import {reviewType} from '~/common/prop-types/prop-types';
import ReviewItem from '~/components/review-item/review-item';

const ReviewList = ({reviews}) => (
  <ul className="reviews__list">
    {reviews.map((review) => (
      <ReviewItem review={review} key={review.id} />
    ))}
  </ul>
);

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(reviewType.isRequired).isRequired,
};

export default ReviewList;
