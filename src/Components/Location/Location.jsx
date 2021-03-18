import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const Map = withScriptjs(withGoogleMap(() => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <Marker position={{ lat: -34.397, lng: 150.644 }} />
  </GoogleMap>
)));

const Location = () => (
  <div style={{ height: '20rem', width: '20rem' }}>
    {console.log(`API KEY: ${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`)}
    <Map
      isMarkerShown
      googleMapURL={
        `https://maps.googleapis.com/maps/api/js?key=${
          process.env.REACT_APP_GOOGLE_MAPS_API_KEY
        }&v=3.exp&libraries=geometry,drawing,places`
      }
      loadingElement={<div style={{ height: '100%' }} />}
      containerElement={<div style={{ height: '400px' }} />}
      mapElement={<div style={{ height: '100%' }} />}
    />
  </div>

);

export default Location;
