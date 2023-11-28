import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { listProjectPage } from './listProject.page';
import { viewProjectPage } from './viewProject.page';
import { addProjectPage } from './addProject.page';
import { editProjectPage } from './editProject.page';
import { navBar } from './navbar.component';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'ceo@foo.com', password: 'changeme' };

fixture('cabletrack.pro localhost test with default db')
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

test.only('Test that Projects list, view, add and edit work', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  // await navBar.gotoListProjectPage(testController);
  // await listProjectPage.isDisplayed(testController);
  // await listProjectPage.gotoAddProjectPage(testController);
  // await addProjectPage.isDisplayed(testController);
  // await addProjectPage.addProject(testController, project);
  // await addProjectPage.gotoProjectPage(testController);
  // await addProjectPage.isDisplayed(testController);
  // await listProjectPage.gotoViewProjectPage(testController);
  // await viewProjectPage.isDisplayed(testController);
  // await viewProjectPage.gotoEditProjectPage(testController);
  // await editProjectPage.isDisplayed(testController);
});
