import * as React from 'react';
import {useRouteMatch} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {AppRoute} from '~/common/enums/app';

const Header = () => {
  const routeMath = useRouteMatch();

  const isRootScreen = routeMath.path === AppRoute.MAIN;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              className="header__logo-link header__logo-link--active"
              to={isRootScreen ? null : AppRoute.MAIN}
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
                  to={AppRoute.FAVORITES}
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className="header__user-name user__name">
                    Oliver.conner@gmail.com
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
