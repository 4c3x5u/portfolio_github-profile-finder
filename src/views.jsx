import React from 'react';
import {
  Row, Col, Form, Button,
} from 'react-bootstrap';

import {
  searchUser, handleUserFound, handleUserNotFound,
} from './utils';

export const viewSearchFormGroup = (setSearchParam, setUserFound, setUserDetails, searchParam) => (
  <Form.Group as={Row}>
    <Col xs={10}>
      <Form.Control
        type="text"
        placeholder="Enter username..."
        onChange={(e) => setSearchParam(e.target.value)}
      />
    </Col>
    <Button
      column
      xs={2}
      variant="primary"
      size="sm"
      onKeyPress={(e) => e.preventDefault()}
      onClick={() => searchUser(
        searchParam,
        handleUserFound(setUserFound, setUserDetails),
        handleUserNotFound(setUserFound, setUserDetails),
      )}
    >
      Search
    </Button>
  </Form.Group>
);

export const viewUserDetails = (userDetails) => (
  <div>
    <h1>{JSON.stringify(userDetails)}</h1>
  </div>
);
