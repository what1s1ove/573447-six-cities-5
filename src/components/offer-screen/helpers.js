import {getSortedItems} from '~/helpers/helpers';

const MAX_REVIEWS_COUNT = 10;

const getFilteredReviews = (reviews) => {
  const sortedReviews = getSortedItems(reviews, (reviewA, reviewB) => reviewB.date - reviewA.date);
  const filteredReviews = sortedReviews.slice(0, MAX_REVIEWS_COUNT);

  return filteredReviews;
};

export {getFilteredReviews};
