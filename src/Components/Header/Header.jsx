import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Title from './Title';
import Search from './Search';

const Header = () => (
  <Row className="Header">
    <Col xs={8}>
      <Title />
    </Col>
    <Col xs={4}>
      <Search />
    </Col>
  </Row>
);

export default Header;
