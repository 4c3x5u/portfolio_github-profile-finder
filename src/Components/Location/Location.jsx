import React from 'react';
import { useLocation } from 'react-router-dom';
import Section from '../Shared/Section/Section';
import Map from './Leaflet/Map';

const Location = () => {
  const { address } = useLocation();
  return (
    <Section
      title={`Location: ${address}`}
      get={(setSearching, setFound) => { setSearching(false); setFound(true); }}
      view={() => <Map />}
    />
  );
};

export default Location;
