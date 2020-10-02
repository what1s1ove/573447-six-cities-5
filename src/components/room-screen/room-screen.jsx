import * as React from 'react';

const RoomScreen = () => (
  <>
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

      <main classNames="page__main page__main--property">
        <section classNames="property">
          <div classNames="property__gallery-container container">
            <div classNames="property__gallery">
              <div classNames="property__image-wrapper">
                <img
                  classNames="property__image"
                  src="img/room.jpg"
                  alt="Photo studio"
                />
              </div>
              <div classNames="property__image-wrapper">
                <img
                  classNames="property__image"
                  src="img/apartment-01.jpg"
                  alt="Photo studio"
                />
              </div>
              <div classNames="property__image-wrapper">
                <img
                  classNames="property__image"
                  src="img/apartment-02.jpg"
                  alt="Photo studio"
                />
              </div>
              <div classNames="property__image-wrapper">
                <img
                  classNames="property__image"
                  src="img/apartment-03.jpg"
                  alt="Photo studio"
                />
              </div>
              <div classNames="property__image-wrapper">
                <img
                  classNames="property__image"
                  src="img/studio-01.jpg"
                  alt="Photo studio"
                />
              </div>
              <div classNames="property__image-wrapper">
                <img
                  classNames="property__image"
                  src="img/apartment-01.jpg"
                  alt="Photo studio"
                />
              </div>
            </div>
          </div>
          <div classNames="property__container container">
            <div classNames="property__wrapper">
              <div classNames="property__mark">
                <span>Premium</span>
              </div>
              <div classNames="property__name-wrapper">
                <h1 classNames="property__name">
                  Beautiful &amp; luxurious studio at great location
                </h1>
                <button
                  classNames="property__bookmark-button button"
                  type="button"
                >
                  <svg
                    classNames="property__bookmark-icon"
                    width="31"
                    height="33"
                  >
                    <use href="#icon-bookmark" />
                  </svg>
                  <span classNames="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div classNames="property__rating rating">
                <div classNames="property__stars rating__stars">
                  <span style="width: 80%"></span>
                  <span classNames="visually-hidden">Rating</span>
                </div>
                <span classNames="property__rating-value rating__value">
                  4.8
                </span>
              </div>
              <ul classNames="property__features">
                <li classNames="property__feature property__feature--entire">
                  Apartment
                </li>
                <li classNames="property__feature property__feature--bedrooms">
                  3 Bedrooms
                </li>
                <li classNames="property__feature property__feature--adults">
                  Max 4 adults
                </li>
              </ul>
              <div classNames="property__price">
                <b classNames="property__price-value">&euro;120</b>
                <span classNames="property__price-text">&nbsp;night</span>
              </div>
              <div classNames="property__inside">
                <h2 classNames="property__inside-title">What&apos;s inside</h2>
                <ul classNames="property__inside-list">
                  <li classNames="property__inside-item">Wi-Fi</li>
                  <li classNames="property__inside-item">Washing machine</li>
                  <li classNames="property__inside-item">Towels</li>
                  <li classNames="property__inside-item">Heating</li>
                  <li classNames="property__inside-item">Coffee machine</li>
                  <li classNames="property__inside-item">Baby seat</li>
                  <li classNames="property__inside-item">Kitchen</li>
                  <li classNames="property__inside-item">Dishwasher</li>
                  <li classNames="property__inside-item">Cabel TV</li>
                  <li classNames="property__inside-item">Fridge</li>
                </ul>
              </div>
              <div classNames="property__host">
                <h2 classNames="property__host-title">Meet the host</h2>
                <div classNames="property__host-user user">
                  <div classNames="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      classNames="property__avatar user__avatar"
                      src="img/avatar-angelina.jpg"
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span classNames="property__user-name"> Angelina </span>
                </div>
                <div classNames="property__description">
                  <p classNames="property__text">
                    A quiet cozy and picturesque that hides behind a a river by
                    the unique lightness of Amsterdam. The building is green and
                    from 18th century.
                  </p>
                  <p classNames="property__text">
                    An independent House, strategically located between Rembrand
                    Square and National Opera, but where the bustle of the city
                    comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section classNames="property__reviews reviews">
                <h2 classNames="reviews__title">
                  Reviews &middot; <span classNames="reviews__amount">1</span>
                </h2>
                <ul classNames="reviews__list">
                  <li classNames="reviews__item">
                    <div classNames="reviews__user user">
                      <div classNames="reviews__avatar-wrapper user__avatar-wrapper">
                        <img
                          classNames="reviews__avatar user__avatar"
                          src="img/avatar-max.jpg"
                          width="54"
                          height="54"
                          alt="Reviews avatar"
                        />
                      </div>
                      <span classNames="reviews__user-name"> Max </span>
                    </div>
                    <div classNames="reviews__info">
                      <div classNames="reviews__rating rating">
                        <div classNames="reviews__stars rating__stars">
                          <span style="width: 80%"></span>
                          <span classNames="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <p classNames="reviews__text">
                        A quiet cozy and picturesque that hides behind a a river
                        by the unique lightness of Amsterdam. The building is
                        green and from 18th century.
                      </p>
                      <time classNames="reviews__time" dateTime="2019-04-24">
                        April 2019
                      </time>
                    </div>
                  </li>
                </ul>
                <form classNames="reviews__form form" action="#" method="post">
                  <label
                    classNames="reviews__label form__label"
                    htmlFor="review"
                  >
                    Your review
                  </label>
                  <div classNames="reviews__rating-form form__rating">
                    <input
                      classNames="form__rating-input visually-hidden"
                      name="rating"
                      value="5"
                      id="5-stars"
                      type="radio"
                    />
                    <label
                      htmlFor="5-stars"
                      classNames="reviews__rating-label form__rating-label"
                      title="perfect"
                    >
                      <svg classNames="form__star-image" width="37" height="33">
                        <use href="#icon-star" />
                      </svg>
                    </label>

                    <input
                      classNames="form__rating-input visually-hidden"
                      name="rating"
                      value="4"
                      id="4-stars"
                      type="radio"
                    />
                    <label
                      htmlFor="4-stars"
                      classNames="reviews__rating-label form__rating-label"
                      title="good"
                    >
                      <svg classNames="form__star-image" width="37" height="33">
                        <use href="#icon-star" />
                      </svg>
                    </label>
                    <input
                      classNames="form__rating-input visually-hidden"
                      name="rating"
                      value="3"
                      id="3-stars"
                      type="radio"
                    />
                    <label
                      htmlFor="3-stars"
                      classNames="reviews__rating-label form__rating-label"
                      title="not bad"
                    >
                      <svg classNames="form__star-image" width="37" height="33">
                        <use href="#icon-star"></use>
                      </svg>
                    </label>

                    <input
                      classNames="form__rating-input visually-hidden"
                      name="rating"
                      value="2"
                      id="2-stars"
                      type="radio"
                    />
                    <label
                      htmlFor="2-stars"
                      classNames="reviews__rating-label form__rating-label"
                      title="badly"
                    >
                      <svg classNames="form__star-image" width="37" height="33">
                        <use href="#icon-star" />
                      </svg>
                    </label>

                    <input
                      classNames="form__rating-input visually-hidden"
                      name="rating"
                      value="1"
                      id="1-star"
                      type="radio"
                    />
                    <label
                      htmlFor="1-star"
                      classNames="reviews__rating-label form__rating-label"
                      title="terribly"
                    >
                      <svg classNames="form__star-image" width="37" height="33">
                        <use href="#icon-star" />
                      </svg>
                    </label>
                  </div>
                  <textarea
                    classNames="reviews__textarea form__textarea"
                    id="review"
                    name="review"
                    placeholder="Tell how was your stay, what you like and what can be improved"
                  ></textarea>
                  <div classNames="reviews__button-wrapper">
                    <p classNames="reviews__help">
                      To submit review please make sure to set
                      <span classNames="reviews__star">rating</span> and
                      describe your stay with at least
                      <b classNames="reviews__text-amount">50 characters</b>.
                    </p>
                    <button
                      classNames="reviews__submit form__submit button"
                      type="submit"
                      disabled=""
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </div>
          <section classNames="property__map map" />
        </section>
        <div classNames="container">
          <section classNames="near-places places">
            <h2 classNames="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div classNames="near-places__list places__list">
              <article classNames="near-places__card place-card">
                <div classNames="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img
                      classNames="place-card__image"
                      src="img/room.jpg"
                      width="260"
                      height="200"
                      alt="Place image"
                    />
                  </a>
                </div>
                <div classNames="place-card__info">
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
                      <span style="width: 80%"></span>
                      <span classNames="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 classNames="place-card__name">
                    <a href="#">Wood and stone place</a>
                  </h2>
                  <p classNames="place-card__type">Private room</p>
                </div>
              </article>

              <article classNames="near-places__card place-card">
                <div classNames="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img
                      classNames="place-card__image"
                      src="img/apartment-02.jpg"
                      width="260"
                      height="200"
                      alt="Place image"
                    />
                  </a>
                </div>
                <div classNames="place-card__info">
                  <div classNames="place-card__price-wrapper">
                    <div classNames="place-card__price">
                      <b classNames="place-card__price-value">&euro;132</b>
                      <span classNames="place-card__price-text">
                        &#47;&nbsp;night
                      </span>
                    </div>
                    <button
                      classNames="place-card__bookmark-button button"
                      type="button"
                    >
                      <svg
                        classNames="place-card__bookmark-icon"
                        width="18"
                        height="19"
                      >
                        <use href="#icon-bookmark" />
                      </svg>
                      <span classNames="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div classNames="place-card__rating rating">
                    <div classNames="place-card__stars rating__stars">
                      <span style="width: 80%"></span>
                      <span classNames="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 classNames="place-card__name">
                    <a href="#">Canal View Prinsengracht</a>
                  </h2>
                  <p classNames="place-card__type">Apartment</p>
                </div>
              </article>

              <article classNames="near-places__card place-card">
                <div classNames="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img
                      classNames="place-card__image"
                      src="img/apartment-03.jpg"
                      width="260"
                      height="200"
                      alt="Place image"
                    />
                  </a>
                </div>
                <div classNames="place-card__info">
                  <div classNames="place-card__price-wrapper">
                    <div classNames="place-card__price">
                      <b classNames="place-card__price-value">&euro;180</b>
                      <span classNames="place-card__price-text">
                        &#47;&nbsp;night
                      </span>
                    </div>
                    <button
                      classNames="place-card__bookmark-button button"
                      type="button"
                    >
                      <svg
                        classNames="place-card__bookmark-icon"
                        width="18"
                        height="19"
                      >
                        <use href="#icon-bookmark" />
                      </svg>
                      <span classNames="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div classNames="place-card__rating rating">
                    <div classNames="place-card__stars rating__stars">
                      <span style="width: 100%"></span>
                      <span classNames="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 classNames="place-card__name">
                    <a href="#">Nice, cozy, warm big bed apartment</a>
                  </h2>
                  <p classNames="place-card__type">Apartment</p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </main>
    </div>
  </>
);

export default RoomScreen;
