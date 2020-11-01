import * as React from 'react';
import PropTypes from 'prop-types';
import {LoginFormKey} from './common';

const AuthForm = ({formState, onFormStateChange, onFormSubmit}) => {
  const handleFormChange = ({target}) => {
    const {name, value} = target;

    onFormStateChange(name, value);
  };

  return (
    <form
      className="login__form form"
      onSubmit={onFormSubmit}
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
      <button className="login__submit form__submit button" type="submit">
        Sign in
      </button>
    </form>
  );
};

AuthForm.propTypes = {
  formState: PropTypes.object.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  onFormStateChange: PropTypes.func.isRequired,
};

export default AuthForm;
