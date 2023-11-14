const RoleGlobalAdmin = 'GlobalAdmin';
const RoleCompanyOwner = 'CompanyOwner';
const RoleProjectOwner = 'ProjectOwner';
const RoleElectrician = 'Electrician';

const RoleListCompanyAll = 'ListCompanyAll';
const RoleListCompany = 'ListCompany';
const RoleListProjectAll = 'ListProjectAll';
const RoleListProject = 'ListProject';
const RoleListCableAll = 'ListCableAll';
const RoleListCable = 'ListCable';
const RoleListCablePullIn = 'ListCablePullIn';
const RoleListUserAll = 'ListUserAll';
const RoleListUser = 'ListUser';

const RoleViewCompanyAll = 'ViewCompanyAll';
const RoleViewCompany = 'ViewCompany';
const RoleViewProjectAll = 'ViewProjectAll';
const RoleViewProject = 'ViewProject';
const RoleViewCableAll = 'ViewCableAll';
const RoleViewCable = 'ViewCable';
const RoleViewCablePullIn = 'ViewCablePullIn';
const RoleViewUserAll = 'ViewUserAll';
const RoleViewUser = 'ViewUser';

const RoleAddCompany = 'AddCompany';
const RoleAddProject = 'AddProject';
const RoleAddCable = 'AddCable';
const RoleAddCablePullIn = 'AddCablePullIn';
const RoleAddUser = 'AddUser';

const RoleEditCompanyAll = 'EditCompanyAll';
const RoleEditCompany = 'EditCompany';
const RoleEditProjectAll = 'EditProjectAll';
const RoleEditProject = 'EditProject';
const RoleEditCableAll = 'EditCableAll';
const RoleEditCable = 'EditCable';
const RoleEditCablePullIn = 'EditCablePullIn';
const RoleEditUserAll = 'EditUserAll';
const RoleEditUser = 'EditUser';

const RoleDeleteCompanyAll = 'DeleteCompanyAll';
const RoleDeleteCompany = 'DeleteCompany';
const RoleDeleteProjectAll = 'DeleteProjectAll';
const RoleDeleteProject = 'DeleteProject';
const RoleDeleteCableAll = 'DeleteCableAll';
const RoleDeleteCable = 'DeleteCable';
const RoleDeleteCablePullIn = 'DeleteCablePullIn';
const RoleDeleteUserAll = 'DeleteUserAll';
const RoleDeleteUser = 'DeleteUser';

const CableTrackProRoles = [
  RoleGlobalAdmin,
  RoleCompanyOwner,
  RoleProjectOwner,
  RoleElectrician,
  RoleListCompanyAll,
  RoleListCompany,
  RoleListProjectAll,
  RoleListProject,
  RoleListCableAll,
  RoleListCable,
  RoleListCablePullIn,
  RoleListUserAll,
  RoleListUser,
  RoleViewCompanyAll,
  RoleViewCompany,
  RoleViewProjectAll,
  RoleViewProject,
  RoleViewCableAll,
  RoleViewCable,
  RoleViewCablePullIn,
  RoleViewUserAll,
  RoleViewUser,
  RoleAddCompany,
  RoleAddProject,
  RoleAddCable,
  RoleAddCablePullIn,
  RoleAddUser,
  RoleEditCompanyAll,
  RoleEditCompany,
  RoleEditProjectAll,
  RoleEditProject,
  RoleEditCableAll,
  RoleEditCable,
  RoleEditCablePullIn,
  RoleEditUserAll,
  RoleEditUser,
  RoleDeleteCompanyAll,
  RoleDeleteCompany,
  RoleDeleteProjectAll,
  RoleDeleteProject,
  RoleDeleteCableAll,
  RoleDeleteCable,
  RoleDeleteCablePullIn,
  RoleDeleteUserAll,
  RoleDeleteUser,
];

const GlobalAdminRoles = [
  RoleListCompanyAll,
  RoleListCompany,
  RoleListProjectAll,
  RoleListProject,
  RoleListCableAll,
  RoleListCable,
  RoleListCablePullIn,
  RoleListUserAll,
  RoleListUser,
  RoleViewCompanyAll,
  RoleViewCompany,
  RoleViewProjectAll,
  RoleViewProject,
  RoleViewCableAll,
  RoleViewCable,
  RoleViewCablePullIn,
  RoleViewUserAll,
  RoleViewUser,
  RoleAddCompany,
  RoleAddProject,
  RoleAddCable,
  RoleAddCablePullIn,
  RoleAddUser,
  RoleEditCompanyAll,
  RoleEditCompany,
  RoleEditProjectAll,
  RoleEditProject,
  RoleEditCableAll,
  RoleEditCable,
  RoleEditCablePullIn,
  RoleEditUserAll,
  RoleEditUser,
  RoleDeleteCompanyAll,
  RoleDeleteCompany,
  RoleDeleteProjectAll,
  RoleDeleteProject,
  RoleDeleteCableAll,
  RoleDeleteCable,
  RoleDeleteCablePullIn,
  RoleDeleteUserAll,
  RoleDeleteUser,
];

const CompanyOwnerRoles = [
  RoleListProjectAll,
  RoleListProject,
  RoleListCableAll,
  RoleListCable,
  RoleListCablePullIn,
  RoleListUser,
  RoleViewCompany,
  RoleViewProject,
  RoleViewCable,
  RoleViewCablePullIn,
  RoleViewUser,
  RoleAddProject,
  RoleAddCable,
  RoleAddUser,
  RoleEditCompany,
  RoleEditProject,
  RoleEditCable,
  RoleDeleteProject,
  RoleDeleteCable,
  RoleDeleteUser,
];

const ProjectOwnerRoles = [
  RoleListProject,
  RoleListCable,
  RoleListCablePullIn,
  RoleViewCompany,
  RoleViewProject,
  RoleViewCable,
  RoleViewCablePullIn,
  RoleViewUser,
  RoleAddCable,
  RoleEditProject,
  RoleEditCable,
  RoleEditUser,
  RoleDeleteCable,
];

const ElectricianRoles = [
  RoleListProject,
  RoleListCable,
  RoleListCablePullIn,
  RoleViewCompany,
  RoleViewProject,
  RoleViewCable,
  RoleViewCablePullIn,
  RoleViewUser,
  RoleAddCablePullIn,
  RoleEditCablePullIn,
  RoleEditUser,
  RoleDeleteCablePullIn,
];

export { CableTrackProRoles, GlobalAdminRoles, CompanyOwnerRoles, ProjectOwnerRoles, ElectricianRoles };
export { RoleGlobalAdmin, RoleCompanyOwner, RoleProjectOwner, RoleElectrician };
export { RoleListCompanyAll, RoleListCompany, RoleListProjectAll, RoleListProject, RoleListCableAll, RoleListCable, RoleListCablePullIn, RoleListUserAll, RoleListUser };
export { RoleViewCompanyAll, RoleViewCompany, RoleViewProjectAll, RoleViewProject, RoleViewCableAll, RoleViewCable, RoleViewCablePullIn, RoleViewUserAll, RoleViewUser };
export { RoleAddCompany, RoleAddProject, RoleAddCable, RoleAddCablePullIn, RoleAddUser };
export { RoleEditCompanyAll, RoleEditCompany, RoleEditProjectAll, RoleEditProject, RoleEditCableAll, RoleEditCable, RoleEditCablePullIn, RoleEditUserAll, RoleEditUser };
export { RoleDeleteCompanyAll, RoleDeleteCompany, RoleDeleteProjectAll, RoleDeleteProject, RoleDeleteCableAll, RoleDeleteCable, RoleDeleteCablePullIn, RoleDeleteUserAll, RoleDeleteUser };
