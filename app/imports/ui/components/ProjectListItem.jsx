import React from 'react';
import { FileEarmarkFill, PencilFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { CombinePath, ParamCompanyID, ParamProjectID, PathViewProject, PathEditProject } from '../../api/navigation/Navigation';
import { PropTypeProject } from '../../api/propTypes/PropTypes';
import { NavViewProject, NavEditProject } from '../../api/testcafe/TestCafe';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const ProjectListItem = ({ project }) => {
  const view = CombinePath(PathViewProject, { [ParamCompanyID]: project.companyID, [ParamProjectID]: project._id });
  const edit = CombinePath(PathEditProject, { [ParamCompanyID]: project.companyID, [ParamProjectID]: project._id });

  return (
    <tr>
      <td>{project.name}</td>
      <td>{project.bidNumber}</td>
      <td>{project.code}</td>
      <td>
        <Link id={NavViewProject} aria-label="view" to={view}><FileEarmarkFill /></Link>
      </td>
      <td>
        <Link id={NavEditProject} aria-label="edit" to={edit}><PencilFill /></Link>
      </td>
    </tr>
  );
};

// Require a document to be passed to this component.
ProjectListItem.propTypes = {
  project: PropTypeProject.isRequired,
};

export default ProjectListItem;
