import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const Map = (
  withScriptjs(
    withGoogleMap(
      ({ latLng }) => (
        <GoogleMap className="Map" defaultZoom={10} defaultCenter={latLng}>
          <Marker position={latLng} />
        </GoogleMap>
      ),
    ),
  )
);

export default Map;
