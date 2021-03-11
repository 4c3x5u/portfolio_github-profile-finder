import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faFolder } from '@fortawesome/free-solid-svg-icons';

const RepoInfoModalBody = () => (
  <p>
    {'Click on files ( '}
    <FontAwesomeIcon icon={faFileAlt} />
    {' ) or folders ( '}
    <FontAwesomeIcon icon={faFolder} />
    {' ) to view their content.'}
  </p>
);

export default RepoInfoModalBody;
