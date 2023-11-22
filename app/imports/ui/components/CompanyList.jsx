import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row, Table } from 'react-bootstrap';
import CompanyListItem from './CompanyListItem';
import { PropTypeCompany } from '../../api/propTypes/PropTypes';

/* Renders a table containing all of the Company documents. Use <CableItem> to render each row. */
const CompanyList = ({ companies }) => (
  <Container className="py-3" fluid>
    <Row className="justify-content-center">
      <Col md={7}>
        <Col className="text-center">
          <h2>List Company</h2>
        </Col>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Description</th>
              <th>View</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company) => (<CompanyListItem company={company} key={company.id} />))}
          </tbody>
        </Table>
      </Col>
    </Row>
  </Container>
);

CompanyList.propTypes = {
  companies: PropTypes.arrayOf(PropTypeCompany).isRequired,
};

export default CompanyList;
