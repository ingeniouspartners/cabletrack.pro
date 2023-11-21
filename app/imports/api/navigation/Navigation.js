import { useParams } from 'react-router';

const ParamCompanyID = 'company_id';
const ParamProjectID = 'project_id';
const ParamCableID = 'cable_id';
const ParamCablePullInID = 'pullin_id';
const ParamUserID = 'user_id';

const RegExpParamNames = new RegExp(`(:(${ParamCompanyID}|${ParamProjectID}|${ParamCableID}|${ParamCablePullInID}|${ParamUserID}))`, 'g');

const PathHome = '/';
const PathSignIn = '/signin';
const PathSignUp = '/signup';
const PathSignOut = '/signout';
const PathListCompany = '/companies';
const PathViewCompany = `/company/:${ParamCompanyID}`;
const PathAddCompany = '/company/add';
const PathEditCompany = `${PathViewCompany}/edit`;
const PathDeleteCompany = `${PathViewCompany}/delete`;
const PathListProject = `${PathViewCompany}/projects`;
const PathViewProject = `${PathViewCompany}/project/:${ParamProjectID}`;
const PathAddProject = `${PathViewCompany}/project/add`;
const PathEditProject = `${PathViewProject}/edit`;
const PathDeleteProject = `${PathViewProject}/delete`;
const PathListCable = `${PathViewProject}/cables`;
const PathViewCable = `${PathViewProject}/cable/:${ParamCableID}`;
const PathAddCable = `${PathViewProject}/cable/add`;
const PathEditCable = `${PathViewCable}/edit`;
const PathDeleteCable = `${PathViewCable}/delete`;
const PathListCablePullIn = `${PathViewCable}/pullins`;
const PathViewCablePullIn = `${PathViewCable}/pullin/:${ParamCablePullInID}`;
const PathAddCablePullIn = `${PathViewCable}/pullin/add`;
const PathEditCablePullIn = `${PathViewCablePullIn}/edit`;
const PathDeleteCablePullIn = `${PathViewCablePullIn}/delete`;
const PathListUser = `${PathViewCompany}/users`;
const PathViewUser = `${PathViewCompany}/user/:${ParamUserID}`;
const PathAddUser = `${PathViewCompany}/user/add`;
const PathEditUser = `${PathViewUser}/edit`;
const PathDeleteUser = `${PathViewUser}/delete`;
const PathNotAuthorized = '/notauthorized';
const PathNotFound = '/notfound';

const ParsePath = (path) => {
  const pathParams = {};
  const params = useParams();
  const results = RegExpParamNames.exec(path);
  if (results && params) results.forEach(result => { pathParams[result.groups[1]] = params[result.groups[1]]; });
  return pathParams;
};

const CombinePath = (path, pathParams) => {
  let combinedPath = path;
  Object.keys(pathParams).forEach((key) => { combinedPath = combinedPath.replace(`:${key}`, pathParams[key]); });
  return combinedPath;
};

export { ParamCompanyID, ParamProjectID, ParamCableID, ParamCablePullInID, ParamUserID };
export { ParsePath, CombinePath };
export { PathHome, PathSignIn, PathSignUp, PathSignOut, PathNotAuthorized, PathNotFound };
export { PathListCompany, PathViewCompany, PathAddCompany, PathEditCompany, PathDeleteCompany };
export { PathListProject, PathViewProject, PathAddProject, PathEditProject, PathDeleteProject };
export { PathListCable, PathViewCable, PathAddCable, PathEditCable, PathDeleteCable };
export { PathListCablePullIn, PathViewCablePullIn, PathAddCablePullIn, PathEditCablePullIn, PathDeleteCablePullIn };
export { PathListUser, PathViewUser, PathAddUser, PathEditUser, PathDeleteUser };
