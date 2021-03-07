import React from 'react';
import { Row, Col } from 'react-bootstrap';
import AppTitle from './AppTitle';
import SearchBox from './SearchBox';

const AppHead = () => (
  <Row className="Header">
    <Col xs={8}>
      <AppTitle />
    </Col>
    <Col xs={4}>
      <SearchBox />
    </Col>
  </Row>
);

export default AppHead;
