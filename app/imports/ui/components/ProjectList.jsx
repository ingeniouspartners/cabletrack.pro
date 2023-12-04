import React from 'react';
import { Table, Container } from 'react-bootstrap';
import { FileEarmarkPlusFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Project from './Project';
import { CombinePath, ParamCompanyID, PathAddProject } from '../../api/navigation/Navigation';
import { PropTypeCompany, PropTypeProject } from '../../api/propTypes/PropTypes';

const ProjectList = ({ projects, company }) => {
  const add = CombinePath(PathAddProject, { [ParamCompanyID]: company._id });
  return (
    <Container id="list-project-page">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan="4"><h2>List Projects</h2></th>
            <th><Link id="add-project-page" aria-label="add" to={add}><FileEarmarkPlusFill /></Link>
            </th>
          </tr>
          <tr>
            <th>Name</th>
            <th>Bid Number</th>
            <th>Code Number</th>
            <th>View</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          { projects ? (projects.map((project) => (<Project project={project} key={project._id} company={company} />))) : '' }
        </tbody>
      </Table>
    </Container>
  );
};

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypeProject).isRequired,
  company: PropTypeCompany.isRequired,
};

export default ProjectList;
