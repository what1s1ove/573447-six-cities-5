import {icon} from 'leaflet';

const MAP_IMG_URL = `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`;

const ICON_CONFIG = icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30],
});

const ACTIVE_ICON_CONFIG = icon({
  iconUrl: `img/pin-active.svg`,
  iconSize: [30, 30],
});

export {MAP_IMG_URL, ICON_CONFIG, ACTIVE_ICON_CONFIG};
