import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import gistsAPI from '../../API/gistsAPI';
import GistsSuccess from './GistsSuccess';
import GistsFailure from './GistsFailure';

const Gists = () => {
  const { login } = useParams();
  const [gists, setGists] = useState([]);
  const [gistsFound, setGistsFound] = useState(false);
  useEffect(() => gistsAPI.get(login, setGists, setGistsFound), []);
  return (
    <div className="Gists">
      <div
        className="GistsHeader bg-dark text-center mb-2"
        style={{
          border: '2px solid #343a40',
          padding: '1.2rem 0 0.7rem 0',
          borderRadius: '2rem 2rem 0 0',
        }}
      >
        <h5 className="text-light">Gists</h5>
      </div>
      {gistsFound
        ? <GistsSuccess gists={gists} />
        : <GistsFailure />}
    </div>

  );
};

export default Gists;
