const checkIsWhiteRoute = (route, whiteRoutes) => {
  const isWhiteRoute = whiteRoutes.some((whiteRoute) => whiteRoute.includes(route));

  return isWhiteRoute;
};

export {checkIsWhiteRoute};
