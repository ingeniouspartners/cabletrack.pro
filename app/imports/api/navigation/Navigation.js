const ParamCompanyID = 'companyID';
const ParamProjectID = 'projectID';
const ParamCableID = 'cableID';
const ParamCablePullInID = 'pullinID';
const ParamID = '_id';
const ParamUserID = 'user_id';

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
const PathListUser = `${PathSubCompany}/users`;
const PathViewUser = `${PathSubCompany}/user/:${ParamID}`;
const PathAddUser = `${PathSubCompany}/user/add`;
const PathEditUser = `${PathViewUser}/edit`;
const PathDeleteUser = `${PathViewUser}/delete`;
const PathNotAuthorized = '/notauthorized';
const PathNotFound = '/notfound';

const CombinePath = (path, pathParams) => {
  let combinedPath = path;
  if (combinedPath && pathParams) {
    Object.keys(pathParams).forEach((key) => {
      combinedPath = combinedPath.replace(`:${key}`, pathParams[key]);
    });
  }
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
