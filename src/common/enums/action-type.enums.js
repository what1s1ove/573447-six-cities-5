const PlacesDataActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  UPDATE_OFFER: `UPDATE_OFFER`,
};

const PlaceActionType = {
  LOAD_OFFER: `LOAD_OFFER`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  LOAD_SIMILAR_OFFERS: `LOAD_SIMILAR_OFFERS`,
  UPDATE_SIMILAR_OFFER: `UPDATE_SIMILAR_OFFER`,
};

const FavoritesActionType = {
  LOAD_FAVORITES: `LOAD_FAVORITES`,
  UPDATE_FAVORITE: `UPDATE_FAVORITE`,
};

const UserActionType = {
  SET_AUTH_STATUS: `SET_AUTH_STATUS`,
  SET_USER: `SET_USER`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
};

export {
  PlacesDataActionType,
  PlaceActionType,
  UserActionType,
  FavoritesActionType,
};
