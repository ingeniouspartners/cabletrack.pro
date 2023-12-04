import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { navBar } from './navbar.component';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'ceo@foo.com', password: 'changeme' };

fixture('tests: cabletrack.pro localhost test with default db')
  .page('http://localhost:3000');

test('Test that landing page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
});

test('Test that signin and signout work', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

// const project = { };

test('Test that Projects list, view, add and edit work', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoCompaniesPage(testController);
  await listCompanyPage.isDisplayed(testController);
  await listCompanyPage.gotoViewCompanyPage(testController);
  await viewCompanyPage.isDisplayed(testController);
  await viewCompanyPage.gotoListProjectPage(testController);
  await listProjectPage.isDisplayed(testController);
  await listProjectPage.gotoAddProjectPage(testController);
  await addProjectPage.isDisplayed(testController);
  // await addProjectPage.addProject(testController, project);
  await addProjectPage.gotoListProjectPage(testController);
  await listProjectPage.gotoViewProjectPage(testController);
  await viewProjectPage.isDisplayed(testController);
  await viewProjectPage.gotoEditProjectPage(testController);
  await editProjectPage.isDisplayed(testController);
});

test('Test that User, View, Edit work', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
});

test('Test that Company View, Edit and add work', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoCompaniesPage(testController);
  await listCompanyPage.isDisplayed(testController);
  await listCompanyPage.gotoViewCompanyPage(testController);
  await viewCompanyPage.isDisplayed(testController);
  await navBar.gotoCompaniesPage(testController);
  await listCompanyPage.gotoAddCompanyPage(testController);
  await addCompanyPage.isDisplayed(testController);
  await navBar.gotoCompaniesPage(testController);
  await listCompanyPage.gotoEditCompanyPage(testController);
  await editCompanyPage.isDisplayed(testController);
});

test('Test that SIgnUp page works', async (testController) => {
  await navBar.gotoSignUpPage(testController);
  await signupPage.signupUser(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});
