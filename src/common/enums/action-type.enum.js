const AppActionType = {
  SET_ERROR: `SET_ERROR`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
};

const UserActionType = {
  SET_AUTH_STATUS: `SET_AUTH_STATUS`,
  SET_USER: `SET_USER`,
};

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

export {
  AppActionType,
  PlacesDataActionType,
  PlaceActionType,
  UserActionType,
  FavoritesActionType,
};
