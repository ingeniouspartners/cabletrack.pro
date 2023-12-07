const RoleGlobalAdmin = 'GlobalAdmin';
const RoleCompanyOwner = 'CompanyOwner';
const RoleProjectOwner = 'ProjectOwner';
const RoleElectrician = 'Electrician';

const RoleListCompanyAll = 'ListCompanyAll';
const RoleListCompanyOwned = 'ListCompanyOwned';
const RoleListCompanyUsed = 'ListCompanyUsed';
const RoleListProjectAll = 'ListProjectAll';
const RoleListProjectOwned = 'ListProjectOwned';
const RoleListProjectUsed = 'ListProjectUsed';
const RoleListCableAll = 'ListCableAll';
const RoleListCableOwned = 'ListCableOwned';
const RoleListCableUsed = 'ListCableUsed';
const RoleListCablePullInAll = 'ListCablePullInAll';
const RoleListCablePullInOwned = 'ListCablePullInOwned';
const RoleListCablePullInUsed = 'ListCablePullInUsed';
const RoleListUserAll = 'ListUserAll';
const RoleListUserOwned = 'ListUserOwned';

const RoleViewCompanyAll = 'ViewCompanyAll';
const RoleViewCompanyOwned = 'ViewCompanyOwned';
const RoleViewCompanyUsed = 'ViewCompanyUsed';
const RoleViewProjectAll = 'ViewProjectAll';
const RoleViewProjectOwned = 'ViewProjectOwned';
const RoleViewProjectUsed = 'ViewProjectUsed';
const RoleViewCableAll = 'ViewCableAll';
const RoleViewCableOwned = 'ViewCableOwned';
const RoleViewCableUsed = 'ViewCableUsed';
const RoleViewCablePullInAll = 'ViewCablePullInAll';
const RoleViewCablePullInOwned = 'ViewCablePullInOwned';
const RoleViewCablePullInUsed = 'ViewCablePullInUsd';
const RoleViewUserAll = 'ViewUserAll';
const RoleViewUserOwned = 'ViewUserOwned';
const RoleViewUserSelf = 'ViewUser';

const RoleAddCompany = 'AddCompany';
const RoleAddProject = 'AddProject';
const RoleAddCable = 'AddCable';
const RoleAddCablePullIn = 'AddCablePullIn';
const RoleAddUser = 'AddUser';

const RoleEditCompanyAll = 'EditCompanyAll';
const RoleEditCompanyOwned = 'EditCompanyOwned';
const RoleEditCompanyUsed = 'EditCompanyUsed';
const RoleEditProjectAll = 'EditProjectAll';
const RoleEditProjectOwned = 'EditProjectOwned';
const RoleEditProjectUsed = 'EditProjectUsed';
const RoleEditCableAll = 'EditCableAll';
const RoleEditCableOwned = 'EditCableOwned';
const RoleEditCableUsed = 'EditCableUsed';
const RoleEditCablePullInAll = 'EditCablePullInAll';
const RoleEditCablePullInOwned = 'EditCablePullInOwned';
const RoleEditCablePullInUsed = 'EditCablePullInUsed';
const RoleEditUserAll = 'EditUserAll';
const RoleEditUserOwned = 'EditUserOwned';
const RoleEditUserSelf = 'EditUserSelf';

const RoleDeleteCompanyAll = 'DeleteCompanyAll';
const RoleDeleteProjectAll = 'DeleteProjectAll';
const RoleDeleteProjectOwned = 'DeleteProjectOwned';
const RoleDeleteCableAll = 'DeleteCableAll';
const RoleDeleteCableOwned = 'DeleteCableOwned';
const RoleDeleteCablePullInAll = 'DeleteCablePullInAll';
const RoleDeleteCablePullInOwned = 'DeleteCablePullInOwned';
const RoleDeleteUserAll = 'DeleteUserAll';
const RoleDeleteUserOwned = 'DeleteUserOwned';

const CableTrackProRoles = [
  RoleGlobalAdmin,
  RoleCompanyOwner,
  RoleProjectOwner,
  RoleElectrician,
  RoleListCompanyAll,
  RoleListCompanyOwned,
  RoleListCompanyUsed,
  RoleListProjectAll,
  RoleListProjectOwned,
  RoleListProjectUsed,
  RoleListCableAll,
  RoleListCableOwned,
  RoleListCableUsed,
  RoleListCablePullInAll,
  RoleListCablePullInOwned,
  RoleListCablePullInUsed,
  RoleListUserAll,
  RoleListUserOwned,
  RoleViewCompanyAll,
  RoleViewCompanyOwned,
  RoleViewCompanyUsed,
  RoleViewProjectAll,
  RoleViewProjectOwned,
  RoleViewProjectUsed,
  RoleViewCableAll,
  RoleViewCableOwned,
  RoleViewCableUsed,
  RoleViewCablePullInAll,
  RoleViewCablePullInOwned,
  RoleViewCablePullInUsed,
  RoleViewUserAll,
  RoleViewUserOwned,
  RoleViewUserSelf,
  RoleAddCompany,
  RoleAddProject,
  RoleAddCable,
  RoleAddCablePullIn,
  RoleAddUser,
  RoleEditCompanyAll,
  RoleEditCompanyOwned,
  RoleEditCompanyUsed,
  RoleEditProjectAll,
  RoleEditProjectOwned,
  RoleEditProjectUsed,
  RoleEditCableAll,
  RoleEditCableOwned,
  RoleEditCableUsed,
  RoleEditCablePullInAll,
  RoleEditCablePullInOwned,
  RoleEditCablePullInUsed,
  RoleEditUserAll,
  RoleEditUserOwned,
  RoleEditUserSelf,
  RoleDeleteCompanyAll,
  RoleDeleteProjectAll,
  RoleDeleteProjectOwned,
  RoleDeleteCableAll,
  RoleDeleteCableOwned,
  RoleDeleteCablePullInAll,
  RoleDeleteCablePullInOwned,
  RoleDeleteUserAll,
  RoleDeleteUserOwned,
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
  RoleViewUserSelf,
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
  RoleEditUserSelf,
  RoleDeleteCompanyAll,
  RoleDeleteProjectAll,
  RoleDeleteCableAll,
  RoleDeleteCablePullInAll,
  RoleDeleteUserAll,
];

const CompanyOwnerRoles = [
  RoleListCompanyOwned,
  RoleListCompanyUsed,
  RoleListProjectOwned,
  RoleListProjectUsed,
  RoleListCableOwned,
  RoleListCableUsed,
  RoleListCablePullInOwned,
  RoleListCablePullInUsed,
  RoleListUserOwned,
  RoleViewCompanyOwned,
  RoleViewCompanyUsed,
  RoleViewProjectOwned,
  RoleViewProjectUsed,
  RoleViewCableOwned,
  RoleViewCableUsed,
  RoleViewCablePullInOwned,
  RoleViewCablePullInUsed,
  RoleViewUserOwned,
  RoleViewUserSelf,
  RoleAddProject,
  RoleAddCable,
  RoleAddCablePullIn,
  RoleAddUser,
  RoleEditCompanyOwned,
  RoleEditCompanyUsed,
  RoleEditProjectOwned,
  RoleEditProjectUsed,
  RoleEditCableOwned,
  RoleEditCableUsed,
  RoleEditUserOwned,
  RoleEditUserSelf,
  RoleDeleteProjectOwned,
  RoleDeleteCableOwned,
  RoleDeleteUserOwned,
];

const ProjectOwnerRoles = [
  RoleListCompanyUsed,
  RoleListProjectOwned,
  RoleListProjectUsed,
  RoleListCableOwned,
  RoleListCableUsed,
  RoleListCablePullInOwned,
  RoleListCablePullInUsed,
  RoleViewCompanyUsed,
  RoleViewProjectOwned,
  RoleViewProjectUsed,
  RoleViewCableOwned,
  RoleViewCableUsed,
  RoleViewCablePullInOwned,
  RoleViewCablePullInUsed,
  RoleViewUserSelf,
  RoleAddProject,
  RoleAddCable,
  RoleAddCablePullIn,
  RoleEditProjectOwned,
  RoleEditCableOwned,
  RoleEditUserSelf,
  RoleDeleteCableOwned,
];

const ElectricianRoles = [
  RoleListCompanyUsed,
  RoleListProjectUsed,
  RoleListCableUsed,
  RoleListCablePullInOwned,
  RoleListCablePullInUsed,
  RoleViewCompanyUsed,
  RoleViewProjectUsed,
  RoleViewCableUsed,
  RoleViewCablePullInOwned,
  RoleViewCablePullInUsed,
  RoleViewUserSelf,
  RoleAddCablePullIn,
  RoleEditCablePullInOwned,
  RoleEditUserSelf,
  RoleDeleteCablePullInOwned,
];

export { RoleGlobalAdmin, RoleCompanyOwner, RoleProjectOwner, RoleElectrician };
export { RoleListCompanyAll, RoleListCompanyOwned, RoleListCompanyUsed };
export { RoleListProjectAll, RoleListProjectOwned, RoleListProjectUsed };
export { RoleListCableAll, RoleListCableOwned, RoleListCableUsed };
export { RoleListCablePullInAll, RoleListCablePullInOwned, RoleListCablePullInUsed };
export { RoleListUserAll, RoleListUserOwned };
export { RoleViewCompanyAll, RoleViewCompanyOwned, RoleViewCompanyUsed };
export { RoleViewProjectAll, RoleViewProjectOwned, RoleViewProjectUsed };
export { RoleViewCableAll, RoleViewCableOwned, RoleViewCableUsed };
export { RoleViewCablePullInAll, RoleViewCablePullInOwned, RoleViewCablePullInUsed };
export { RoleViewUserAll, RoleViewUserOwned, RoleViewUserSelf };
export { RoleAddCompany, RoleAddProject, RoleAddCable, RoleAddCablePullIn, RoleAddUser };
export { RoleEditCompanyAll, RoleEditCompanyOwned, RoleEditCompanyUsed };
export { RoleEditProjectAll, RoleEditProjectOwned, RoleEditProjectUsed };
export { RoleEditCableAll, RoleEditCableOwned, RoleEditCableUsed };
export { RoleEditCablePullInAll, RoleEditCablePullInOwned, RoleEditCablePullInUsed };
export { RoleEditUserAll, RoleEditUserOwned, RoleEditUserSelf };
export { RoleDeleteCompanyAll };
export { RoleDeleteProjectAll, RoleDeleteProjectOwned };
export { RoleDeleteCableAll, RoleDeleteCableOwned };
export { RoleDeleteCablePullInAll, RoleDeleteCablePullInOwned };
export { RoleDeleteUserAll, RoleDeleteUserOwned };

export { CableTrackProRoles, GlobalAdminRoles, CompanyOwnerRoles, ProjectOwnerRoles, ElectricianRoles };
