import React from 'react';
import PropTypes from 'prop-types';
import {
  Row, Col, Form, InputGroup, Button,
} from 'react-bootstrap';
import {
  searchUser, handleUserFound, handleUserNotFound,
} from '../../API/UserAPI';

const SearchForm = ({
  setSearchParam,
  setUserFound,
  setUser,
  searchParam,
}) => (
  <Form onSubmit={(e) => e.preventDefault()} className="mb-3">
    <Row noGutters>
      <Col xs={9}>
        <InputGroup
          style={{ border: '2px solid #343a40', borderRadius: '4px' }}
        >
          <InputGroup.Prepend>
            <InputGroup.Text className="bg-dark text-light">@</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            type="text"
            placeholder="4c3x5u"
            onChange={(e) => setSearchParam(e.target.value || '4c3x5u')}
          />
        </InputGroup>
      </Col>
      <Col className="pl-2" size={3}>
        <Button
          variant="dark"
          size="sm"
          onKeyPress={(e) => e.preventDefault()}
          onClick={() => (
            searchUser(
              searchParam,
              handleUserFound(setUserFound, setUser),
              handleUserNotFound(setUserFound, setUser),
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
  setUser: PropTypes.func.isRequired,
  searchParam: PropTypes.string.isRequired,
};

export default SearchForm;
