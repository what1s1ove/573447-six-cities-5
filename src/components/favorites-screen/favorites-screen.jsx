import * as React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '~/common/enums/enums';
import {useSelector} from 'react-redux';
import {getOffers} from '~/store/selectors/selectors';
import Header from '~/components/header/header';
import FavoriteOffersList from '~/components/favorite-cities-list/favorite-cities-list';

const FavoritesScreen = () => {
  const offers = useSelector(getOffers);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoriteOffersList offers={offers} />
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.MAIN}>
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </Link>
      </footer>
    </div>
  );
};

export default FavoritesScreen;
