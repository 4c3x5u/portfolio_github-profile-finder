import React from 'react';
import PropTypes from 'prop-types';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import Spinner from '../../Shared/Spinner';
import './LocationContent.sass';

const Map = withScriptjs(withGoogleMap(({ latLng }) => (
  <GoogleMap className="Map" defaultZoom={8} defaultCenter={latLng}>
    <Marker position={latLng} />
  </GoogleMap>
)));

const LocationContent = ({ latLng }) => (
  <Map
    isMarkerShown
    latLng={latLng}
    googleMapURL={
      `https://maps.googleapis.com/maps/api/js?key=${
        process.env.REACT_APP_GOOGLE_MAPS_API_KEY
      }&libraries=geometry,drawing,places`
    }
    loadingElement={<Spinner />}
    containerElement={<div className="MapContainer" />}
    mapElement={<div style={{ height: '100%' }} />}
  />
);

LocationContent.propTypes = {
  latLng: PropTypes.objectOf({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
};

export default LocationContent;
