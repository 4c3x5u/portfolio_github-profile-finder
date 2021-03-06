import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  Form,
  InputGroup,
} from 'react-bootstrap';

const SearchForm = () => {
  const [searchParam, setSearchParam] = useState('4c3x5u');

  return (
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
          <Link
            to={`/${searchParam}`}
            className="btn btn-dark sm"
            style={{ height: '100%', width: '100%' }}
          >
            Search
          </Link>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchForm;
