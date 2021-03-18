import React from 'react';
import { useLocation } from 'react-router-dom';
import Section from '../Shared/Section/Section';
import LocationContent from './Content/LocationContent';
import { getLocation } from '../../API/locationAPI';

const Location = () => {
  const { address } = useLocation();
  return (
    <Section
      title={`Location: ${address}`}
      get={getLocation(address)}
      view={(latLng) => <LocationContent latLng={latLng} />}
    />
  );
};

export default Location;
