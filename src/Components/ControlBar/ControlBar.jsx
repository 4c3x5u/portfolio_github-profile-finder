import React from 'react';
import { Row, Col } from 'react-bootstrap';
import AppTitle from './AppTitle';
import UserSearch from './UserSearch';

const ControlBar = () => (
  <Row className="ControlBar">
    <Col xs={8}>
      <AppTitle />
    </Col>
    <Col xs={4}>
      <UserSearch />
    </Col>
  </Row>
);

export default ControlBar;
