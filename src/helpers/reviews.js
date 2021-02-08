import {adaptUserToClient} from '~/helpers/user';

const adaptReviewToClient = (review) => ({
  id: review.id,
  comment: review.comment,
  rating: review.rating,
  date: new Date(review.date),
  user: adaptUserToClient(review.user),
});

const adaptReviewsToClient = (reviews) => {
  const adaptedReviewToClient = reviews.map(adaptReviewToClient);

  return adaptedReviewToClient;
};

export {adaptReviewToClient, adaptReviewsToClient};
