import * as React from 'react';
import PropTypes from 'prop-types';
import ReviewRatings from '~/components/review-ratings/review-ratings';
import {checkIsFormValid} from './helpers';
import {ReviewFormKey, CommentLength} from './common';

const ReviewForm = ({
  formState,
  onFormStateChange,
  onFormSubmit,
  onFormReset,
}) => {
  const [isFormSaving, setIsFormSaving] = React.useState(false);
  const isFormValid = checkIsFormValid(formState);

  const handleRatingChange = (newRating) => onFormStateChange(ReviewFormKey.RARING, newRating);

  const handleCommentChange = ({target}) => onFormStateChange(ReviewFormKey.COMMENT, target.value);

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    setIsFormSaving(true);

    onFormSubmit(formState)
      .then(() => onFormReset())
      .finally(() => setIsFormSaving(false));
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
        onRatingChange={handleRatingChange}
        isDisabled={isFormSaving}
      />
      <textarea
        className="reviews__textarea form__textarea"
        value={formState.comment || ``}
        onChange={handleCommentChange}
        maxLength={CommentLength.MAX}
        disabled={isFormSaving}
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        required
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span> and describe your stay
          with at least
          <b className="reviews__text-amount">{CommentLength.MIN} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          disabled={!isFormValid || isFormSaving}
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
  onFormSubmit: PropTypes.func.isRequired,
  onFormReset: PropTypes.func.isRequired,
};

export default ReviewForm;
