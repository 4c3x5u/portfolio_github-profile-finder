import React from 'react';
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';

import './Map.sass';

const Map = () => (
  <MapContainer
    className="MapContainer"
    center={[51.505, -0.09]}
    zoom={13}
    scrollWheelZoom={false}
  >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[51.505, -0.09]}>
      <Popup>
        {/* TODO: Print location name */}
        Location...
      </Popup>
    </Marker>
  </MapContainer>
);

export default Map;
