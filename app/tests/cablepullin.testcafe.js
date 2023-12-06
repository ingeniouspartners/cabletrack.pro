import { signinPage } from './signin.page';
import { listProjectPage } from './listProject.page';
import { viewProjectPage } from './viewProject.page';
// import { listCablePage } from './listCable.page';
// import { viewCablePage } from './viewCable.page';
import { listCablePullInPage } from './listCablePullIn.page';
// import { viewCablePullInPage } from './viewCablePullIn.page';
// import { addCablePullInPage } from './addCablePullIn.page';
// import { editCablePullInPage } from './editCablePullIn.page';
import { navBar } from './navbar.component';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'elec@foo.com', password: 'changeme' };

fixture('cablepullin: cabletrack.pro localhost test with default db')
  .page('http://localhost:3000');

/*
test('Test that Cable PullIn List works', async (testController) => {
  await navBar.ensureLogout(testController);
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoProjectsPage(testController);
  await listProjectPage.isDisplayed(testController);
  await listProjectPage.hasProject(testController);
  await listProjectPage.gotoViewProjectPage(testController);
  await viewProjectPage.isDisplayed(testController);
  await viewProjectPage.gotoListCablePage(testController);
  await listCablePage.isDisplayed(testController);
  await listCablePage.hasCable(testController);
  await listCablePage.gotoViewCablePage(testController);
  await viewCablePage.isDisplayed(testController);
  await viewCablePage.gotoListCablePullInPage(testController);
  await listCablePullInPage.isDisplayed(testController);
  await listCablePullInPage.hasCablePullIn(testController, 0);
});

test('Test that Cable PullIn View works', async (testController) => {
  await navBar.ensureLogout(testController);
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoProjectsPage(testController);
  await listProjectPage.isDisplayed(testController);
  await listProjectPage.hasProject(testController);
  await listProjectPage.gotoViewProjectPage(testController);
  await viewProjectPage.isDisplayed(testController);
  await viewProjectPage.gotoListCablePage(testController);
  await listCablePage.isDisplayed(testController);
  await listCablePage.hasCable(testController);
  await listCablePage.gotoViewCablePage(testController);
  await viewCablePage.isDisplayed(testController);
  await viewCablePage.gotoListCablePullInPage(testController);
  await listCablePullInPage.isDisplayed(testController);
  await listCablePullInPage.hasCablePullIn(testController, 0);
  await listCablePullInPage.gotoViewCablePullInPage(testController);
  await viewCablePullInPage.isDisplayed(testController);
});

test('Test that Company Add works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoCompaniesPage(testController);
  await listCompanyPage.isDisplayed(testController);
  await listCompanyPage.gotoAddCompanyPage(testController);
  await addCompanyPage.isDisplayed(testController);
});

test('Test that Company Edit works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoCompaniesPage(testController);
  await listCompanyPage.isDisplayed(testController);
  await listCompanyPage.gotoEditCompanyPage(testController);
  await editCompanyPage.isDisplayed(testController);
});
*/
