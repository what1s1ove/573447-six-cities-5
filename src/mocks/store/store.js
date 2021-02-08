import configureStore from 'redux-mock-store';
import {mockedOffer, mockedOffers} from '~/mocks/offers/offers';
import {mockedReviews} from '~/mocks/reviews/reviews';
import {mockedUser} from '~/mocks/user/user';
import {AuthStatus} from '~/common/enums/enums';

const storeConfig = configureStore();

const store = storeConfig({
  data: {
    offers: mockedOffers,
  },
  place: {
    offer: mockedOffer,
    reviews: mockedReviews,
    similarOffers: mockedOffers,
  },
  favorites: {
    offers: mockedOffers,
  },
  user: {
    user: mockedUser,
    status: AuthStatus.AUTH,
  },
  toastr: {
    toastrs: [],
    confirm: null,
  },
});

export {store};
