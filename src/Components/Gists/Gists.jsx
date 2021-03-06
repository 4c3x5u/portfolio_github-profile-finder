import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import gistsAPI from '../../API/gistsAPI';
import GistsSuccess from './GistsSuccess';
import GistsFailure from './GistsFailure';
import SubpageHeader from '../Shared/SubpageHeader';
import Spinner from '../Shared/Spinner/Spinner';

const Gists = () => {
  const { login } = useParams();
  const [loading, setLoading] = useState(true);
  const [gistsFound, setGistsFound] = useState(false);
  const [gists, setGists] = useState([]);

  useEffect(
    () => gistsAPI.get(login, setLoading, setGistsFound, setGists),
    [],
  );

  const gistsHeader = () => <SubpageHeader subpage="Gists" />;

  const gistsContent = () => {
    if (loading) { return <Spinner />; }
    if (gistsFound) { return <GistsSuccess gists={gists} />; }
    return <GistsFailure />;
  };

  return (
    <div className="Gists">
      {gistsHeader()}
      {gistsContent()}
    </div>
  );
};

export default Gists;
