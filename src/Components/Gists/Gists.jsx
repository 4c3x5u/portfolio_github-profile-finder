import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import gistsAPI from '../../API/gistsAPI';
import Subheader from '../Shared/Subheader/Subheader';
import Searching from '../Shared/Searching/Searching';
import GistsFound from './GistsFound';
import GistsNotFound from './GistsNotFound';

const Gists = () => {
  const { login } = useParams();
  const [searching, setSearching] = useState(true);
  const [found, setFound] = useState(false);
  const [gists, setGists] = useState([]);

  useEffect(
    () => gistsAPI.search(login, setSearching, setFound, setGists),
    [],
  );

  const gistsHeader = () => <Subheader title="Gists" />;

  const gistsContent = () => {
    if (searching) { return <Searching />; }
    if (found) { return <GistsFound gists={gists} />; }
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
