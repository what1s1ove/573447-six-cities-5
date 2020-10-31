import {PlacesDataActionType} from '~/common/enums/enums';

const PlacesDataActionCreator = {
  loadOffers: (offers) => ({
    type: PlacesDataActionType.LOAD_OFFERS,
    payload: {
      offers,
    },
  }),
  fetchOffers: () => (dispatch, _, {api}) => {
    api
      .get(`/hotels`)
      .then(({data}) => dispatch(PlacesDataActionCreator.loadOffers(data)))
      .catch((err) => {
        throw err;
      });
  },
};

export {PlacesDataActionCreator};
