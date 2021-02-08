import * as React from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoute} from '~/common/enums/enums';
import Header from '~/components/header/header';
import AuthForm from '~/components/auth-form/auth-form';
import {UserActionCreator} from '~/store/actions/user/user';

const AuthScreen = ({formState, onFormStateChange}) => {
  const dispatch = useDispatch();

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
            <AuthForm
              formState={formState}
              onFormSubmit={handleSubmit}
              onFormStateChange={onFormStateChange}
            />
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
