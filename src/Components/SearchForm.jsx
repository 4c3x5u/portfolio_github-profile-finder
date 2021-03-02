import React from 'react';
import PropTypes from 'prop-types';
import {
  Row, Col, Form, InputGroup, Button,
} from 'react-bootstrap';
import {
  searchUser, handleUserFound, handleUserNotFound,
} from '../utils';

const SearchForm = ({
  setSearchParam, setUserFound, setUserDetails, searchParam,
}) => (
  <Form onSubmit={(e) => e.preventDefault()} className="mb-3">
    <Row>
      <Col xs={10}>
        <InputGroup style={{ margin: 0 }}>
          <InputGroup.Prepend>
            <InputGroup.Text>@</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            type="text"
            placeholder="Enter username"
            onChange={(e) => setSearchParam(e.target.value)}
          />
        </InputGroup>
      </Col>
      <Col size={2}>
        <Button
          variant="primary"
          size="sm"
          onKeyPress={(e) => e.preventDefault()}
          onClick={() => (
            searchUser(
              searchParam,
              handleUserFound(setUserFound, setUserDetails),
              handleUserNotFound(setUserFound, setUserDetails),
            )
          )}
          style={{ height: '100%', width: '100%' }}
        >
          Search
        </Button>
      </Col>
    </Row>
  </Form>
);

SearchForm.propTypes = {
  setSearchParam: PropTypes.func.isRequired,
  setUserFound: PropTypes.func.isRequired,
  setUserDetails: PropTypes.func.isRequired,
  searchParam: PropTypes.string.isRequired,
};

export default SearchForm;
