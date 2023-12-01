const ParamCompanyID = 'companyID';
const ParamProjectID = 'projectID';
const ParamCableID = 'cableID';
const ParamCablePullInID = 'pullinID';
const ParamUserID = 'userID';

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

/**
 * Combines the path with the given parameters to result in a navigable path.
 * @param path - A path with parameters to be replaced
 * @param obj - An object containing the parameters to be replaced in the path
 * @returns the combined path with with the parameters replaced
 */
const CombinePath = (path, obj) => {
  let combinedPath = path;
  if (combinedPath && obj) {
    Object.keys(obj).forEach((key) => {
      combinedPath = combinedPath.replace(`:${key}`, obj[key]);
    });
  }
  return combinedPath;
};

export { ParamCompanyID, ParamProjectID, ParamCableID, ParamCablePullInID, ParamUserID };
export { CombinePath };
export { PathHome, PathSignIn, PathSignUp, PathSignOut, PathNotAuthorized, PathNotFound };
export { PathListCompany, PathViewCompany, PathAddCompany, PathEditCompany, PathDeleteCompany };
export { PathListProject, PathViewProject, PathAddProject, PathEditProject, PathDeleteProject };
export { PathListCable, PathViewCable, PathAddCable, PathEditCable, PathDeleteCable };
export { PathListCablePullIn, PathViewCablePullIn, PathAddCablePullIn, PathEditCablePullIn, PathDeleteCablePullIn };
export { PathListUser, PathViewUser, PathAddUser, PathEditUser, PathDeleteUser };
