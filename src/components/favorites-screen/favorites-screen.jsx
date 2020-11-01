import * as React from 'react';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import {AppRoute} from '~/common/enums/enums';
import {useDispatch, useSelector} from 'react-redux';
import {FavoritesActionCreator} from '~/store/actions/actions';
import {getFavorites} from '~/store/selectors/selectors';
import Header from '~/components/header/header';
import FavoriteOffersList from '~/components/favorite-cities-list/favorite-cities-list';
import FavoritesScreenEmptyPlaceholder from '~/components/favorites-screen-empty-placeholder/favorites-screen-empty-placeholder';

const FavoritesScreen = () => {
  const dispatch = useDispatch();
  const offers = useSelector(getFavorites);

  const hasOffers = Boolean(offers.length);

  React.useEffect(() => {
    dispatch(FavoritesActionCreator.fetchFavorites());
  }, []);

  return (
    <div className="page">
      <Header />
      <main
        className={clsx(
            `page__main page__main--favorites`,
            !hasOffers && `page__main--favorites-empty`
        )}
      >
        <div className="page__favorites-container container">
          <section
            className={clsx(`favorites`, !hasOffers && `favorites--empty`)}
          >
            {hasOffers ? (
              <>
                <h1 className="favorites__title">Saved listing</h1>
                <FavoriteOffersList offers={offers} />
              </>
            ) : (
              <FavoritesScreenEmptyPlaceholder />
            )}
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
