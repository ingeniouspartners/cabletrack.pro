import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import CableViewItem from './CableViewItem';

/* Renders a table containing one of the Cable documents. Use <CableItem> to render each row. */
const CableView = (cable_id, doc) => {
  <Container className="py-3" fluid>
    <Row className="justify-content-center">
      <Col md={7}>
        <Col className="text-center">
          <h2>View Cable</h2>
        </Col>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Description</th>
              <th>RefDrawingNo</th>
              <th>RefDrawingRev</th>
              <th>System</th>
              <th>Building</th>
              <th>Zone</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            { doc ? <CableViewItem key={doc._id} cable={doc} /> : ''}
          </tbody>
        </Table>
      </Col>
    </Row>
  </Container>;
};

export default CableView;
