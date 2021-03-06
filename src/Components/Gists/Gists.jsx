import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import gistsAPI from '../../API/gistsAPI';
import GistsSuccess from './GistsSuccess';
// import GistsFailure from './GistsFailure';

const Gists = () => {
  const { login } = useParams();
  const [gists, setGists] = useState([]);
  const [gistsFound, setGistsFound] = useState(false);
  useEffect(() => gistsAPI.get(login, setGists, setGistsFound), []);
  return (
    gistsFound
      ? <GistsSuccess gists={gists} />
      : <h1>Gists not found.</h1> // TODO: Replace this with <GistsFailure />
  );
};

export default Gists;
