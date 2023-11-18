import { useParams } from 'react-router';

const ParamCompanyID = 'companyID';
const ParamProjectID = 'projectID';
const ParamCableID = 'cableID';
const ParamCablePullInID = 'pullinID';
const ParamID = '_id';
const ParamUserID = 'user_id';

const RegExpParamNames = new RegExp(`(:(${ParamCompanyID}|${ParamProjectID}|${ParamCableID}|${ParamCablePullInID}|${ParamUserID}))`, 'g');

const PathHome = '/';
const PathSignIn = '/signin';
const PathSignUp = '/signup';
const PathSignOut = '/signout';
const PathListCompany = '/companies';
const PathViewCompany = `/company/:${ParamID}`;
const PathAddCompany = '/company/add';
const PathEditCompany = `${PathViewCompany}/edit`;
const PathDeleteCompany = `${PathViewCompany}/delete`;
const PathSubCompany = `/company/:${ParamCompanyID}`;
const PathListProject = `${PathSubCompany}/projects`;
const PathViewProject = `${PathSubCompany}/project/:${ParamID}`;
const PathAddProject = `${PathSubCompany}/project/add`;
const PathEditProject = `${PathViewProject}/edit`;
const PathDeleteProject = `${PathViewProject}/delete`;
const PathSubProject = `${PathSubCompany}/project/:${ParamProjectID}`;
const PathListCable = `${PathSubProject}/cables`;
const PathViewCable = `${PathSubProject}/cable/:${ParamID}`;
const PathAddCable = `${PathSubProject}/cable/add`;
const PathEditCable = `${PathViewCable}/edit`;
const PathDeleteCable = `${PathViewCable}/delete`;
const PathSubCable = `${PathSubProject}/cable/:${ParamCableID}`;
const PathListCablePullIn = `${PathSubCable}/pullins`;
const PathViewCablePullIn = `${PathSubCable}/pullin/:${ParamID}`;
const PathAddCablePullIn = `${PathSubCable}/pullin/add`;
const PathEditCablePullIn = `${PathViewCablePullIn}/edit`;
const PathDeleteCablePullIn = `${PathViewCablePullIn}/delete`;
const PathListUser = `${PathViewCompany}/users`;
const PathViewUser = `${PathViewCompany}/user/:${ParamID}`;
const PathAddUser = `${PathViewCompany}/user/add`;
const PathEditUser = `${PathViewUser}/edit`;
const PathDeleteUser = `${PathViewUser}/delete`;
const PathNotAuthorized = '/notauthorized';
const PathNotFound = '/notfound';

const CombinePath = (path, pathParams) => {
  let combinedPath = path;
  Object.keys(pathParams).forEach((key) => {
    // console.log(`key=${key}, value=${pathParams[key]}`);
    combinedPath = combinedPath.replace(`:${key}`, pathParams[key]);
    // console.log(`combinedPath=${combinedPath}`);
  });
  return combinedPath;
};

export { ParamCompanyID, ParamProjectID, ParamCableID, ParamCablePullInID, ParamUserID, ParamID };
export { CombinePath };
export { PathHome, PathSignIn, PathSignUp, PathSignOut, PathNotAuthorized, PathNotFound };
export { PathListCompany, PathViewCompany, PathAddCompany, PathEditCompany, PathDeleteCompany };
export { PathListProject, PathViewProject, PathAddProject, PathEditProject, PathDeleteProject };
export { PathListCable, PathViewCable, PathAddCable, PathEditCable, PathDeleteCable };
export { PathListCablePullIn, PathViewCablePullIn, PathAddCablePullIn, PathEditCablePullIn, PathDeleteCablePullIn };
export { PathListUser, PathViewUser, PathAddUser, PathEditUser, PathDeleteUser };
