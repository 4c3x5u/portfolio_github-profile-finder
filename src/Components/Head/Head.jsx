import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SearchForm from './SearchForm';

const Head = () => (
  <Row>
    <Col>
      <h2 className="text-dark">GitHub Profile Finder</h2>
    </Col>
    <Col xs={4}>
      <SearchForm />
    </Col>
  </Row>
);

export default Head;
