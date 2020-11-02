import * as React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {getUser} from '~/store/selectors/selectors';
import {AppRoute} from '~/common/enums/enums';

const Header = () => {
  const user = useSelector(getUser);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              className="header__logo-link header__logo-link--active"
              to={AppRoute.MAIN}
            >
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link
                  className="header__nav-link header__nav-link--profile"
                  to={user ? AppRoute.FAVORITES : AppRoute.LOGIN}
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className="header__user-name user__name">
                    {user ? user.email : `Sign In`}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
