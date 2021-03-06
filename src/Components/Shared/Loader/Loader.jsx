import React from 'react';
import RotateLoader from 'react-spinners/RotateLoader';

const Loader = () => (
  <div className="Loader">
    <RotateLoader
      loading
      size={60}
      margin={50}
      color="#343a40"
      css={{
        display: 'block',
        margin: '7rem auto 0 auto',
        borderColor: 'red',
      }}
    />
  </div>
);

export default Loader;
