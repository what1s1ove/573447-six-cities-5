import * as React from 'react';
import ReviewRatings from '~/components/review-ratings/review-ratings';

const ReviewForm = () => {
  const [comment, setComment] = React.useState(``);
  const [rating, setRating] = React.useState(``);

  const onRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleCommentChange = ({target}) => {
    setComment(target.value);
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <ReviewRatings currentRating={rating} onRatingChange={onRatingChange} />
      <textarea
        className="reviews__textarea form__textarea"
        value={comment}
        onChange={handleCommentChange}
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
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
