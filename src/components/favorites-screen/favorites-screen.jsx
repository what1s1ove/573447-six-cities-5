import * as React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {offerType} from '~/common/prop-types/prop-types';
import Header from '~/components/header/header';
import FavoriteOffersList from '~/components/favorite-cities-list/favorite-cities-list';

const FavoritesScreen = ({offers}) => (
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
      <a className="footer__logo-link" href="main.html">
        <img
          className="footer__logo"
          src="img/logo.svg"
          alt="6 cities logo"
          width="64"
          height="33"
        />
      </a>
    </footer>
  </div>
);

FavoritesScreen.propTypes = {
  offers: PropTypes.arrayOf(offerType.isRequired).isRequired,
};

export default connect(({places}) => ({
  offers: places.offers,
}))(FavoritesScreen);
