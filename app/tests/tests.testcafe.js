import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { listCompanyPage } from './listCompany.page';
import { viewCompanyPage } from './viewCompany.page';
import { editCompanyPage } from './editCompany.page';
import { listProjectPage } from './listProject.page';
import { viewProjectPage } from './viewProject.page';
import { addProjectPage } from './addProject.page';
import { editProjectPage } from './editProject.page';
import { addCompanyPage } from './addCompany.page';
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

const project =
  {
    name: 'A Test Project',
    code: 'IDK-456',
    contract: 'SMT-123',
    bidNumber: 'BID789',
    jobPhone: '123-456-7890',
    jobFax: '123-456-7890',
    jobEmail: 'something@something.com',
    notes: 'This is a secret note.',
    mailAddress: {
      address: 'Address 123',
      address2: 'Address 456',
      city: 'The City',
      state: 'NY',
      zip: '12345',
      country: 'US' },
    shipAddress:
      { address: 'Ship Address 123',
        address2: 'Ship Address 456',
        city: 'Ship City',
        state: 'CA',
        zip: '54321',
        country: 'US' } };

const editproject = {
  name: 'The edited project',
};

test('Test that Projects list, view, add and edit work', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoCompaniesPage(testController);
  await listCompanyPage.isDisplayed(testController);
  await listCompanyPage.gotoViewCompanyPage(testController);
  await viewCompanyPage.isDisplayed(testController);
  await viewCompanyPage.gotoListProjectPage(testController); // test list projects
  await listProjectPage.isDisplayed(testController);
  await listProjectPage.gotoAddProjectPage(testController);
  await addProjectPage.isDisplayed(testController);
  await addProjectPage.addProject(testController, project); // test add project
  await addProjectPage.gotoListProjectPage(testController);
  await listProjectPage.hasProject(testController); // test if the project is added
  await listProjectPage.gotoViewProjectPage(testController); // test view project
  await viewProjectPage.isDisplayed(testController);
  await viewProjectPage.gotoEditProjectPage(testController); // test edit project
  await editProjectPage.isDisplayed(testController);
  await editProjectPage.editProject(testController, editproject);
  await editProjectPage.gotoListProjectPage(testController);
  await listProjectPage.gotoViewProjectPage(testController);
  await viewProjectPage.checkEdit(testController, editproject);
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
