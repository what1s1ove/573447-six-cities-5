import * as React from 'react';
import PropTypes from 'prop-types';
import ReviewRatings from '~/components/review-ratings/review-ratings';
import {checkIsFormValid} from './helpers';
import {ReviewFormKey, CommentLength} from './common';

const ReviewForm = ({
  formState,
  onFormStateChange,
  onFormReset,
  onReviewFormSubmit,
}) => {
  const isFormValid = checkIsFormValid(formState);
  const onRatingChange = (newRating) => {
    onFormStateChange(ReviewFormKey.RARING, newRating);
  };

  const handleCommentChange = ({target}) => {
    onFormStateChange(ReviewFormKey.COMMENT, target.value);
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    onReviewFormSubmit(formState);

    onFormReset();
  };

  return (
    <form
      className="reviews__form form"
      onSubmit={handleFormSubmit}
      action="#"
      method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <ReviewRatings
        currentRating={formState.rating || ``}
        onRatingChange={onRatingChange}
      />
      <textarea
        className="reviews__textarea form__textarea"
        value={formState.comment || ``}
        onChange={handleCommentChange}
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        maxLength={CommentLength.MAX}
        required
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span> and describe your stay
          with at least
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          disabled={!isFormValid}
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  formState: PropTypes.object.isRequired,
  onFormStateChange: PropTypes.func.isRequired,
  onFormReset: PropTypes.func.isRequired,
  onReviewFormSubmit: PropTypes.func.isRequired,
};

export default ReviewForm;
