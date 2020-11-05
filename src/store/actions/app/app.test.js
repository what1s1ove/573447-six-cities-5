import {AppActionType, AppRoute, NotificationType} from '~/common/enums/enums';
import {AppActionCreator} from './app';

describe(`App action creator works correctly`, () => {
  it(`setNotification ac returns correct action`, () => {
    expect(
        AppActionCreator.setNotification({
          message: `Message`,
          type: NotificationType.ERROR,
        })
    ).toEqual({
      type: AppActionType.SET_NOTIFICATION,
      payload: {
        message: `Message`,
        type: NotificationType.ERROR,
        isShow: true,
      },
    });
  });

  it(`redirectToRoute ac returns correct action`, () => {
    expect(AppActionCreator.redirectToRoute(AppRoute.MAIN)).toEqual({
      type: AppActionType.REDIRECT_TO_ROUTE,
      payload: {
        path: AppRoute.MAIN,
      },
    });
  });
});
