import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import Spinner from '../../Shared/Spinner';
import './LocationContent.sass';

const Map = withScriptjs(withGoogleMap(() => (
  <GoogleMap
    className="Map"
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <Marker position={{ lat: -34.397, lng: 150.644 }} />
  </GoogleMap>
)));

const LocationContent = () => (
  <Map
    isMarkerShown
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

export default LocationContent;
