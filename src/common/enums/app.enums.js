const AppRoute = {
  FAVORITES: `/favorites`,
  LOGIN: `/login`,
  MAIN: `/`,
  OFFER: `/offer`,
  OFFER_ID: `/offer/:id`,
};

const AppConfig = {
  OFFERS_COUNT: 40,
  REVIEWS_COUNT: 5,
};

const SortType = {
  POPULAR: `Popular`,
  TO_HIGHT: `Price: low to high`,
  TO_LOW: `Price: high to low`,
  TOP_RATE: `Top rated first`,
};

export {AppRoute, AppConfig, SortType};
