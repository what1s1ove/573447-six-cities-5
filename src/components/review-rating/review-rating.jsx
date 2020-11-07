import * as React from 'react';
import PropTypes from 'prop-types';

const ReviewRating = ({value, name, isChecked, isDisabled, onRatingChange}) => {
  const ratingLabel = `${value}-stars`;

  const handleRatingChange = ({target}) => onRatingChange(target.value);

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        onChange={handleRatingChange}
        value={value}
        checked={isChecked}
        disabled={isDisabled}
        id={ratingLabel}
        name="rating"
        type="radio"
        required
      />
      <label
        htmlFor={ratingLabel}
        className="reviews__rating-label form__rating-label"
        title={name}
      >
        <svg className="form__star-image" width="37" height="33">
          <use href="#icon-star" />
        </svg>
      </label>
    </>
  );
};

ReviewRating.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onRatingChange: PropTypes.func.isRequired,
};

export default ReviewRating;
