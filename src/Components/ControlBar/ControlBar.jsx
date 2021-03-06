import React from 'react';
import { Row, Col } from 'react-bootstrap';
import UserSearch from './UserSearch';

const ControlBar = () => (
  <Row>
    <Col>
      <h2 className="Title text-dark">
        GitHub Profile Finder
      </h2>
    </Col>
    <Col xs={4}>
      <UserSearch />
    </Col>
  </Row>
);

export default ControlBar;
