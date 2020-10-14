import leaflet from 'leaflet';

const getMapConfig = (city) => {
  const mapConfig = {
    center: [city.location.latitude, city.location.longitude],
    zoom: 12,
    marker: true,
  };

  return mapConfig;
};

const getMap = (city, mapNode) => {
  const mapConfig = getMapConfig(city);

  const map = leaflet.map(mapNode, mapConfig);

  return map;
};

const getMarker = (offer, config) => {
  const mapMarker = leaflet.marker(
      [offer.location.latitude, offer.location.longitude], {
        icon: config,
      }
  );

  return mapMarker;
};

const getMarkers = (offers, config) => {
  const markers = offers.map((offer) => getMarker(offer, config));

  return markers;
};

export {getMap, getMapConfig, getMarker, getMarkers};
