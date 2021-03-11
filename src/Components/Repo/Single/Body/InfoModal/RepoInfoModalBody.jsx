import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faFolder } from '@fortawesome/free-solid-svg-icons';
import './RepoInfoModalBody.sass';

const RepoInfoModalBody = () => (
  <p className="RepoInfoModalBody">
    {'Click on files ( '}
    <FontAwesomeIcon icon={faFileAlt} />
    {' ) and folders ( '}
    <FontAwesomeIcon icon={faFolder} />
    {' ) to view their content.'}
  </p>
);

export default RepoInfoModalBody;
