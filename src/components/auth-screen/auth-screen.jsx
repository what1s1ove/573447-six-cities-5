import * as React from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoute} from '~/common/enums/enums';
import Header from '~/components/header/header';
import {LoginFormKey} from './common';
import {UserActionCreator} from '~/store/actions/user/user';

const AuthScreen = ({formState, onFormStateChange}) => {
  const dispatch = useDispatch();

  const handleFormChange = ({target}) => {
    const {name, value} = target;

    onFormStateChange(name, value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(UserActionCreator.login(formState));
  };

  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              onSubmit={handleSubmit}
              action="#"
              method="post"
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  onChange={handleFormChange}
                  value={formState.email || ``}
                  name={LoginFormKey.EMAIL}
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  onChange={handleFormChange}
                  value={formState.password || ``}
                  name={LoginFormKey.PASSWORD}
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.MAIN}>
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

AuthScreen.propTypes = {
  formState: PropTypes.object.isRequired,
  onFormStateChange: PropTypes.func.isRequired,
  onFormReset: PropTypes.func.isRequired,
};

export default AuthScreen;
