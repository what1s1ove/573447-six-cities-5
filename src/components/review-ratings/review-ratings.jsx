import * as React from 'react';
import PropTypes from 'prop-types';
import ReviewRating from '~/components/review-rating/review-rating';
import {RatingToValuesMap} from './common';

const ratingsEntries = Object.entries(RatingToValuesMap);

const ReviewRatings = ({currentRating, isDisabled, onRatingChange}) => (
  <div className="reviews__rating-form form__rating">
    {ratingsEntries.map(([name, value]) => {
      const isChecked = currentRating === value;

      return (
        <ReviewRating
          name={name}
          value={value}
          isChecked={isChecked}
          isDisabled={isDisabled}
          onRatingChange={onRatingChange}
          key={name}
        />
      );
    })}
  </div>
);

ReviewRatings.propTypes = {
  currentRating: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onRatingChange: PropTypes.func.isRequired,
};

export default ReviewRatings;
