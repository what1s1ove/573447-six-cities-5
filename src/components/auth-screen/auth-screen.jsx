import * as React from 'react';

const AuthScreen = () => (
  <div classNames="page page--gray page--login">
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
                  <span classNames="header__login">Sign in</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <main classNames="page__main page__main--login">
      <div classNames="page__login-container container">
        <section classNames="login">
          <h1 classNames="login__title">Sign in</h1>
          <form classNames="login__form form" action="#" method="post">
            <div classNames="login__input-wrapper form__input-wrapper">
              <label classNames="visually-hidden">E-mail</label>
              <input
                classNames="login__input form__input"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div classNames="login__input-wrapper form__input-wrapper">
              <label classNames="visually-hidden">Password</label>
              <input
                classNames="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <button
              classNames="login__submit form__submit button"
              type="submit"
            >
              Sign in
            </button>
          </form>
        </section>
        <section classNames="locations locations--login locations--current">
          <div classNames="locations__item">
            <a classNames="locations__item-link" href="#">
              <span>Amsterdam</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  </div>
);

export default AuthScreen;
