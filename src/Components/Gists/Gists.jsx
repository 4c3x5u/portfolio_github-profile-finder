import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import gistsAPI from '../../API/gistsAPI';
import Loader from '../Shared/Loader/Loader';
import GistsFound from './GistsFound';
import GistsNotFound from './GistsNotFound';
import PageHeader from '../Shared/PageHeader/PageHeader';

const Gists = () => {
  const { login } = useParams();
  const [loading, setLoading] = useState(true);
  const [gistsFound, setGistsFound] = useState(false);
  const [gists, setGists] = useState([]);

  useEffect(
    () => gistsAPI.get(login, setLoading, setGistsFound, setGists),
    [],
  );

  const gistsHeader = () => <PageHeader title="Gists" />;

  const gistsContent = () => {
    if (loading) { return <Loader />; }
    if (gistsFound) { return <GistsFound gists={gists} />; }
    return <GistsNotFound />;
  };

  return (
    <div className="Gists">
      {gistsHeader()}
      {gistsContent()}
    </div>
  );
};

export default Gists;
