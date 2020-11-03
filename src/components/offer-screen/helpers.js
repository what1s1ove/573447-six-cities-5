const MAX_REVIEWS_COUNT = 10;

const getFilteredReviews = (reviews) => {
  const filteredReviews = reviews.slice(0, MAX_REVIEWS_COUNT);

  return filteredReviews;
};

export {getFilteredReviews};
