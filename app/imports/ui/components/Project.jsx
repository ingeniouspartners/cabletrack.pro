import React from 'react';
import { FileEarmarkFill, PencilFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { CombinePath, ParamCompanyID, ParamProjectID, PathViewProject, PathEditProject } from '../../api/navigation/Navigation';
import { PropTypeCompany, PropTypeProject } from '../../api/propTypes/PropTypes';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Project = ({ project, company }) => {
  const view = CombinePath(PathViewProject, { [ParamCompanyID]: company._id, [ParamProjectID]: project._id });
  const edit = CombinePath(PathEditProject, { [ParamCompanyID]: company._id, [ParamProjectID]: project._id });

  return (
    <tr>
      <td>{project.name}</td>
      <td>{project.bidNumber}</td>
      <td>{project.code}</td>
      <td>
        <Link aria-label="view" to={view}><FileEarmarkFill /></Link>
      </td>
      <td>
        <Link aria-label="edit" to={edit}><PencilFill /></Link>
      </td>
    </tr>
  );
};

// Require a document to be passed to this component.
Project.propTypes = {
  project: PropTypeProject.isRequired,
  company: PropTypeCompany.isRequired,
};

export default Project;
