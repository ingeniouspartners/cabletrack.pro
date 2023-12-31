import { signinPage } from './signin.page';
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

const project =
  {
    name: 'A Test Project',
    code: 'IDK456',
    contract: 'SMT123',
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
  name: 'Edit Project',
};

test('Test that ProjectList works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoListProjectPage(testController);
  await listProjectPage.isDisplayed(testController);
  await listProjectPage.hasProject(testController, 1); // test if the project is added
});

test('Test that ProjectView works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoListProjectPage(testController);
  await listProjectPage.isDisplayed(testController);
  await listProjectPage.hasProject(testController, 1); // test if the project is added
  await listProjectPage.gotoViewProjectPage(testController); // test view project
  await viewProjectPage.isDisplayed(testController);
});

test('Test that ProjectEdit works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoListProjectPage(testController);
  await listProjectPage.isDisplayed(testController);
  await listProjectPage.hasProject(testController, 1); // test if the project is added
  await listProjectPage.gotoEditProjectPage(testController); // test edit project
  await editProjectPage.isDisplayed(testController);
  await editProjectPage.editProject(testController, editproject);
  await navBar.gotoListProjectPage(testController);
  await listProjectPage.gotoViewProjectPage(testController);
  await viewProjectPage.checkView(testController, editproject);
});

test('Test that ProjectAdd works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoListProjectPage(testController); // test list projects
  await listProjectPage.isDisplayed(testController);
  await listProjectPage.gotoAddProjectPage(testController);
  await addProjectPage.isDisplayed(testController);
  await addProjectPage.addProject(testController, project); // test add project
  await navBar.gotoListProjectPage(testController);
  await listProjectPage.hasProject(testController, 1); // test if the project is added
});
