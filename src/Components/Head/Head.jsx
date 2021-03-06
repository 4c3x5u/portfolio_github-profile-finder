import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm';

const Head = ({
  searchParam,
  setSearchParam,
}) => (
  <Row>
    <Col>
      <h2 className="text-dark">GitHub Profile Finder</h2>
    </Col>
    <Col xs={4}>
      <SearchForm
        searchParam={searchParam}
        setSearchParam={setSearchParam}
      />
    </Col>
  </Row>
);

Head.propTypes = {
  searchParam: PropTypes.string.isRequired,
  setSearchParam: PropTypes.func.isRequired,
};

export default Head;
