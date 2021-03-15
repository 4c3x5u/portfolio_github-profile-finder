import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import './InfoModalToggler.sass';

const InfoModalToggler = ({ handleShowInfoModal }) => (
  <Button className="InfoModalToggler" onClick={handleShowInfoModal} variant="dark">
    <FontAwesomeIcon icon={faQuestion} />
  </Button>
);

InfoModalToggler.propTypes = {
  handleShowInfoModal: PropTypes.func.isRequired,
};

export default InfoModalToggler;
