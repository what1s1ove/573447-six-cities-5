import * as React from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import {offerCityType, offerType} from '~/common/prop-types/prop-types';
import {getMap, getMarker, getMarkers} from './helpers';
import {MAP_IMG_URL, ICON_CONFIG, ACTIVE_ICON_CONFIG} from './common';

const withMap = (Component) => {
  const WithMap = ({city, activeOffer, offers: allOffers}) => {
    const [points, setPoints] = React.useState([]);
    const [activePoint, setActivePoint] = React.useState(null);
    let [map] = React.useState(null);
    const mapRef = React.useRef(null);

    React.useEffect(() => {
      map = getMap(city, mapRef.current);

      addToMap(leaflet.tileLayer(MAP_IMG_URL));

      updateMarkers(allOffers);
    }, []);

    React.useEffect(() => {
      updateMarkers(allOffers);

      setMapView(city.location.latitude, city.location.longitude);

      if (activeOffer) {
        updateActiveMarker(activeOffer);
      }
    }, [city, activeOffer]);

    const updateMarkers = (offers) => {
      removeMarkers(points);

      const markers = getMarkers(offers, ICON_CONFIG);

      setPoints(markers);

      addToMap(leaflet.layerGroup(markers));
    };

    const updateActiveMarker = (offer) => {
      if (activePoint) {
        removeMarker(activePoint);
      }

      const newActivePoint = getMarker(offer, ACTIVE_ICON_CONFIG);

      setActivePoint(newActivePoint);

      addToMap(newActivePoint);

      setMapView(offer.location.latitude, offer.location.longitude);
    };

    const removeMarkers = (markers) => markers.forEach(removeMarker);

    const removeMarker = (marker) => map.removeLayer(marker);

    const setMapView = (latitude, longitude) => map.setView([latitude, longitude]);

    const addToMap = (layer) => layer.addTo(map);

    const renderMap = () => <div id="map" ref={mapRef} />;

    return <Component renderMap={renderMap} />;
  };

  WithMap.propTypes = {
    city: offerCityType.isRequired,
    activeOffer: offerType,
    offers: PropTypes.arrayOf(offerType.isRequired).isRequired,
  };

  return WithMap;
};

export default withMap;
