import * as React from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {PlaceActionCreator} from '~/store/actions/actions';
import ReviewRatings from '~/components/review-ratings/review-ratings';
import {checkIsFormValid} from './helpers';
import {ReviewFormKey, CommentLength} from './common';

const ReviewForm = ({
  offerId,
  formState,
  onFormStateChange,
  onFormReset,
}) => {
  const dispatch = useDispatch();
  const [isFormSaving, setIsFormSaving] = React.useState(false);

  const isFormValid = checkIsFormValid(formState);

  const onRatingChange = (newRating) => {
    onFormStateChange(ReviewFormKey.RARING, newRating);
  };

  const handleCommentChange = ({target}) => {
    onFormStateChange(ReviewFormKey.COMMENT, target.value);
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    setIsFormSaving(true);

    dispatch(PlaceActionCreator.uploadReview(offerId, formState))
      .then(() => {
        setIsFormSaving(false);

        onFormReset();
      })
      .catch(() => setIsFormSaving(false));
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
  offerId: PropTypes.number.isRequired,
  formState: PropTypes.object.isRequired,
  onFormStateChange: PropTypes.func.isRequired,
  onFormReset: PropTypes.func.isRequired,
};

export default ReviewForm;
