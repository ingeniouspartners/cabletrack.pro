const RoleGlobalAdmin = 'GlobalAdmin';
const RoleCompanyOwner = 'CompanyOwner';
const RoleProjectOwner = 'ProjectOwner';
const RoleElectrician = 'Electrician';

const RoleListCompanyAll = 'ListCompanyAll';
const RoleListCompany = 'ListCompany';
const RoleListProjectAll = 'ListProjectAll';
const RoleListProjectOwned = 'ListProjectOwned';
const RoleListProject = 'ListProject';
const RoleListCableAll = 'ListCableAll';
const RoleListCableOwned = 'ListCableOwned';
const RoleListCable = 'ListCable';
const RoleListCablePullInAll = 'ListCablePullInAll';
const RoleListCablePullInOwned = 'ListCablePullInOwned';
const RoleListCablePullIn = 'ListCablePullIn';
const RoleListUserAll = 'ListUserAll';
const RoleListUserOwned = 'ListUserOwned';
const RoleListUser = 'ListUser';

const RoleViewCompanyAll = 'ViewCompanyAll';
const RoleViewCompany = 'ViewCompany';
const RoleViewProjectAll = 'ViewProjectAll';
const RoleViewProjectOwned = 'ViewProjectOwned';
const RoleViewProject = 'ViewProject';
const RoleViewCableAll = 'ViewCableAll';
const RoleViewCableOwned = 'ViewCableOwned';
const RoleViewCable = 'ViewCable';
const RoleViewCablePullInAll = 'ViewCablePullInAll';
const RoleViewCablePullInOwned = 'ViewCablePullInOwned';
const RoleViewCablePullIn = 'ViewCablePullIn';
const RoleViewUserAll = 'ViewUserAll';
const RoleViewUserOwned = 'ViewUserOwned';
const RoleViewUser = 'ViewUser';

const RoleAddCompany = 'AddCompany';
const RoleAddProject = 'AddProject';
const RoleAddCable = 'AddCable';
const RoleAddCablePullIn = 'AddCablePullIn';
const RoleAddUser = 'AddUser';

const RoleEditCompanyAll = 'EditCompanyAll';
const RoleEditCompany = 'EditCompany';
const RoleEditProjectAll = 'EditProjectAll';
const RoleEditProjectOwned = 'EditProjectOwned';
const RoleEditProject = 'EditProject';
const RoleEditCableAll = 'EditCableAll';
const RoleEditCableOwned = 'EditCableOwned';
const RoleEditCable = 'EditCable';
const RoleEditCablePullInAll = 'EditCablePullInAll';
const RoleEditCablePullInOwned = 'EditCablePullInOwned';
const RoleEditCablePullIn = 'EditCablePullIn';
const RoleEditUserAll = 'EditUserAll';
const RoleEditUserOwned = 'EditUserOwned';
const RoleEditUser = 'EditUser';

const RoleDeleteCompanyAll = 'DeleteCompanyAll';
const RoleDeleteCompany = 'DeleteCompany';
const RoleDeleteProjectAll = 'DeleteProjectAll';
const RoleDeleteProjectOwned = 'DeleteProjectOwned';
const RoleDeleteProject = 'DeleteProject';
const RoleDeleteCableAll = 'DeleteCableAll';
const RoleDeleteCableOwned = 'DeleteCableOwned';
const RoleDeleteCable = 'DeleteCable';
const RoleDeleteCablePullInAll = 'DeleteCablePullInAll';
const RoleDeleteCablePullInOwned = 'DeleteCablePullInOwned';
const RoleDeleteCablePullIn = 'DeleteCablePullIn';
const RoleDeleteUserAll = 'DeleteUserAll';
const RoleDeleteUserOwned = 'DeleteUserOwned';
const RoleDeleteUser = 'DeleteUser';
const RoleChangeRole = "ChangeRoe";
const RoleChangeRoleAll = "ChangeRoleAll";

const CableTrackProRoles = [
  RoleGlobalAdmin,
  RoleCompanyOwner,
  RoleProjectOwner,
  RoleElectrician,
  RoleListCompanyAll,
  RoleListCompany,
  RoleListProjectAll,
  RoleListProjectOwned,
  RoleListProject,
  RoleListCableAll,
  RoleListCableOwned,
  RoleListCable,
  RoleListCablePullInAll,
  RoleListCablePullInOwned,
  RoleListCablePullIn,
  RoleListUserAll,
  RoleListUserOwned,
  RoleListUser,
  RoleViewCompanyAll,
  RoleViewCompany,
  RoleViewProjectAll,
  RoleViewProjectOwned,
  RoleViewProject,
  RoleViewCableAll,
  RoleViewCableOwned,
  RoleViewCable,
  RoleViewCablePullInAll,
  RoleViewCablePullInOwned,
  RoleViewCablePullIn,
  RoleViewUserAll,
  RoleViewUserOwned,
  RoleViewUser,
  RoleAddCompany,
  RoleAddProject,
  RoleAddCable,
  RoleAddCablePullIn,
  RoleAddUser,
  RoleEditCompanyAll,
  RoleEditCompany,
  RoleEditProjectAll,
  RoleEditProjectOwned,
  RoleEditProject,
  RoleEditCableAll,
  RoleEditCableOwned,
  RoleEditCable,
  RoleEditCablePullInAll,
  RoleEditCablePullInOwned,
  RoleEditCablePullIn,
  RoleEditUserAll,
  RoleEditUserOwned,
  RoleEditUser,
  RoleDeleteCompanyAll,
  RoleDeleteCompany,
  RoleDeleteProjectAll,
  RoleDeleteProjectOwned,
  RoleDeleteProject,
  RoleDeleteCableAll,
  RoleDeleteCableOwned,
  RoleDeleteCable,
  RoleDeleteCablePullInAll,
  RoleDeleteCablePullInOwned,
  RoleDeleteCablePullIn,
  RoleDeleteUserAll,
  RoleDeleteUserOwned,
  RoleDeleteUser,
  RoleChangeRole,
  RoleChangeRoleAll,
];

const GlobalAdminRoles = [
  RoleListCompanyAll,
  RoleListProjectAll,
  RoleListCableAll,
  RoleListCablePullInAll,
  RoleListUserAll,
  RoleViewCompanyAll,
  RoleViewProjectAll,
  RoleViewCableAll,
  RoleViewCablePullInAll,
  RoleViewUserAll,
  RoleAddCompany,
  RoleAddProject,
  RoleAddCable,
  RoleAddCablePullIn,
  RoleAddUser,
  RoleEditCompanyAll,
  RoleEditProjectAll,
  RoleEditCableAll,
  RoleEditCablePullInAll,
  RoleEditUserAll,
  RoleDeleteCompanyAll,
  RoleDeleteProjectAll,
  RoleDeleteCableAll,
  RoleDeleteCablePullInAll,
  RoleDeleteUserAll,
  RoleChangeRoleAll,
];

const CompanyOwnerRoles = [
  RoleListProjectOwned,
  RoleListCableOwned,
  RoleListCablePullInOwned,
  RoleListUserOwned,
  RoleViewCompany,
  RoleViewProjectOwned,
  RoleViewCableOwned,
  RoleViewCablePullInOwned,
  RoleViewUserOwned,
  RoleAddProject,
  RoleAddCable,
  RoleAddUser,
  RoleEditCompany,
  RoleEditProjectOwned,
  RoleEditCableOwned,
  RoleDeleteProjectOwned,
  RoleDeleteCableOwned,
  RoleDeleteUserOwned,
  RoleChangeRole,
];

const ProjectOwnerRoles = [
  RoleListProjectOwned,
  RoleListCableOwned,
  RoleListCablePullInOwned,
  RoleViewCompany,
  RoleViewProjectOwned,
  RoleViewCableOwned,
  RoleViewCablePullInOwned,
  RoleViewUser,
  RoleAddCable,
  RoleEditProjectOwned,
  RoleEditCableOwned,
  RoleEditUser,
  RoleDeleteCableOwned,
];

const ElectricianRoles = [
  RoleListProjectOwned,
  RoleListCableOwned,
  RoleListCablePullInOwned,
  RoleViewCompany,
  RoleViewProjectOwned,
  RoleViewCableOwned,
  RoleViewCablePullInOwned,
  RoleViewUser,
  RoleAddCablePullIn,
  RoleEditCablePullInOwned,
  RoleEditUser,
  RoleDeleteCablePullInOwned,
];

export { RoleGlobalAdmin, RoleCompanyOwner, RoleProjectOwner, RoleElectrician, RoleListCompanyAll, RoleListCompany, RoleListProjectAll, RoleListProjectOwned, RoleListProject, RoleListCableAll, RoleListCableOwned, RoleListCable,
  RoleListCablePullInAll, RoleListCablePullInOwned, RoleListCablePullIn, RoleListUserAll, RoleListUserOwned, RoleListUser, RoleViewCompanyAll, RoleViewCompany, RoleViewProjectAll, RoleViewProjectOwned, RoleViewProject, RoleViewCableAll,
  RoleViewCableOwned, RoleViewCable, RoleViewCablePullInAll, RoleViewCablePullInOwned, RoleViewCablePullIn, RoleViewUserAll, RoleViewUserOwned, RoleViewUser, RoleAddCompany, RoleAddProject, RoleAddCable, RoleAddCablePullIn, RoleAddUser,
  RoleEditCompanyAll, RoleEditCompany, RoleEditProjectAll, RoleEditProjectOwned, RoleEditProject, RoleEditCableAll, RoleEditCableOwned, RoleEditCable, RoleEditCablePullInAll, RoleEditCablePullInOwned, RoleEditCablePullIn, RoleEditUserAll,
  RoleEditUserOwned, RoleEditUser, RoleDeleteCompanyAll, RoleDeleteCompany, RoleDeleteProjectAll, RoleDeleteProjectOwned, RoleDeleteProject, RoleDeleteCableAll, RoleDeleteCableOwned, RoleDeleteCable, RoleDeleteCablePullInAll,
  RoleDeleteCablePullInOwned, RoleDeleteCablePullIn, RoleDeleteUserAll, RoleDeleteUserOwned, RoleDeleteUser };
export { CableTrackProRoles, GlobalAdminRoles, CompanyOwnerRoles, ProjectOwnerRoles, ElectricianRoles };
