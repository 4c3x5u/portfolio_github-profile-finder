import React from 'react';
import PropTypes from 'prop-types';
import Map from './Map/Map';
import Spinner from '../../Shared/Spinner';
import './LocationContent.sass';

const LocationContent = ({ latLng }) => (
  <Map
    isMarkerShown
    googleMapURL={
      `https://maps.googleapis.com/maps/api/js?key=${
        process.env.REACT_APP_GOOGLE_MAPS_API_KEY
      }&libraries=geometry,drawing,places`
    }
    latLng={latLng}
    loadingElement={<Spinner />}
    containerElement={<div className="LocationContent" />}
    mapElement={<div className="MapElement" />}
  />
);

LocationContent.propTypes = {
  latLng: PropTypes.objectOf({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
};

export default LocationContent;
