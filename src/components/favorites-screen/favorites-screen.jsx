import * as React from 'react';

const FavoritesScreen = () => (
  <div classNames="page">
    <header classNames="header">
      <div classNames="container">
        <div classNames="header__wrapper">
          <div classNames="header__left">
            <a classNames="header__logo-link" href="main.html">
              <img
                classNames="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </a>
          </div>
          <nav classNames="header__nav">
            <ul classNames="header__nav-list">
              <li classNames="header__nav-item user">
                <a
                  classNames="header__nav-link header__nav-link--profile"
                  href="#"
                >
                  <div classNames="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span classNames="header__user-name user__name">
                    Oliver.conner@gmail.com
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <main classNames="page__main page__main--favorites">
      <div classNames="page__favorites-container container">
        <section classNames="favorites">
          <h1 classNames="favorites__title">Saved listing</h1>
          <ul classNames="favorites__list">
            <li classNames="favorites__locations-items">
              <div classNames="favorites__locations locations locations--current">
                <div classNames="locations__item">
                  <a classNames="locations__item-link" href="#">
                    <span>Amsterdam</span>
                  </a>
                </div>
              </div>
              <div classNames="favorites__places">
                <article classNames="favorites__card place-card">
                  <div classNames="favorites__image-wrapper place-card__image-wrapper">
                    <a href="#">
                      <img
                        classNames="place-card__image"
                        src="img/apartment-small-03.jpg"
                        width="150"
                        height="110"
                        alt="Place image"
                      />
                    </a>
                  </div>
                  <div classNames="favorites__card-info place-card__info">
                    <div classNames="place-card__price-wrapper">
                      <div classNames="place-card__price">
                        <b classNames="place-card__price-value">&euro;180</b>
                        <span classNames="place-card__price-text">
                          &#47;&nbsp;night
                        </span>
                      </div>
                      <button
                        classNames="place-card__bookmark-button place-card__bookmark-button--active button"
                        type="button"
                      >
                        <svg
                          classNames="place-card__bookmark-icon"
                          width="18"
                          height="19"
                        >
                          <use href="#icon-bookmark" />
                        </svg>
                        <span classNames="visually-hidden">In bookmarks</span>
                      </button>
                    </div>
                    <div classNames="place-card__rating rating">
                      <div classNames="place-card__stars rating__stars">
                        <span
                          style={{
                            width: `80%`,
                          }}
                        />
                        <span classNames="visually-hidden">Rating</span>
                      </div>
                    </div>
                    <h2 classNames="place-card__name">
                      <a href="#">Nice, cozy, warm big bed apartment</a>
                    </h2>
                    <p classNames="place-card__type">Apartment</p>
                  </div>
                </article>
                <article classNames="favorites__card place-card">
                  <div classNames="favorites__image-wrapper place-card__image-wrapper">
                    <a href="#">
                      <img
                        classNames="place-card__image"
                        src="img/room-small.jpg"
                        width="150"
                        height="110"
                        alt="Place image"
                      />
                    </a>
                  </div>
                  <div classNames="favorites__card-info place-card__info">
                    <div classNames="place-card__price-wrapper">
                      <div classNames="place-card__price">
                        <b classNames="place-card__price-value">&euro;80</b>
                        <span classNames="place-card__price-text">
                          &#47;&nbsp;night
                        </span>
                      </div>
                      <button
                        classNames="place-card__bookmark-button place-card__bookmark-button--active button"
                        type="button"
                      >
                        <svg
                          classNames="place-card__bookmark-icon"
                          width="18"
                          height="19"
                        >
                          <use href="#icon-bookmark" />
                        </svg>
                        <span classNames="visually-hidden">In bookmarks</span>
                      </button>
                    </div>
                    <div classNames="place-card__rating rating">
                      <div classNames="place-card__stars rating__stars">
                        <span
                          style={{
                            width: `80%`,
                          }}
                        />
                        <span classNames="visually-hidden">Rating</span>
                      </div>
                    </div>
                    <h2 classNames="place-card__name">
                      <a href="#">Wood and stone place</a>
                    </h2>
                    <p classNames="place-card__type">Private room</p>
                  </div>
                </article>
              </div>
            </li>

            <li classNames="favorites__locations-items">
              <div classNames="favorites__locations locations locations--current">
                <div classNames="locations__item">
                  <a classNames="locations__item-link" href="#">
                    <span>Cologne</span>
                  </a>
                </div>
              </div>
              <div classNames="favorites__places">
                <article classNames="favorites__card place-card">
                  <div classNames="favorites__image-wrapper place-card__image-wrapper">
                    <a href="#">
                      <img
                        classNames="place-card__image"
                        src="img/apartment-small-04.jpg"
                        width="150"
                        height="110"
                        alt="Place image"
                      />
                    </a>
                  </div>
                  <div classNames="favorites__card-info place-card__info">
                    <div classNames="place-card__price-wrapper">
                      <div classNames="place-card__price">
                        <b classNames="place-card__price-value">&euro;180</b>
                        <span classNames="place-card__price-text">
                          &#47;&nbsp;night
                        </span>
                      </div>
                      <button
                        classNames="place-card__bookmark-button place-card__bookmark-button--active button"
                        type="button"
                      >
                        <svg
                          classNames="place-card__bookmark-icon"
                          width="18"
                          height="19"
                        >
                          <use href="#icon-bookmark" />
                        </svg>
                        <span classNames="visually-hidden">In bookmarks</span>
                      </button>
                    </div>
                    <div classNames="place-card__rating rating">
                      <div classNames="place-card__stars rating__stars">
                        <span
                          style={{
                            width: `10%`,
                          }}
                        />
                        <span classNames="visually-hidden">Rating</span>
                      </div>
                    </div>
                    <h2 classNames="place-card__name">
                      <a href="#">White castle</a>
                    </h2>
                    <p classNames="place-card__type">Apartment</p>
                  </div>
                </article>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main>
    <footer classNames="footer container">
      <a classNames="footer__logo-link" href="main.html">
        <img
          classNames="footer__logo"
          src="img/logo.svg"
          alt="6 cities logo"
          width="64"
          height="33"
        />
      </a>
    </footer>
  </div>
);

export default FavoritesScreen;
