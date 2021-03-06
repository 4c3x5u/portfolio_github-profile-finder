import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import gistsAPI from '../../API/gistsAPI';
import GistsSuccess from './GistsSuccess';
import GistsFailure from './GistsFailure';
import SubpageHeader from '../Shared/SubpageHeader';

const Gists = () => {
  const { login } = useParams();
  const [gists, setGists] = useState([]);
  const [gistsFound, setGistsFound] = useState(false);
  useEffect(() => gistsAPI.get(login, setGists, setGistsFound), []);
  return (
    <div className="Gists">
      <SubpageHeader subpage="Gists" />
      {gistsFound
        ? <GistsSuccess gists={gists} />
        : <GistsFailure />}
    </div>

  );
};

export default Gists;
