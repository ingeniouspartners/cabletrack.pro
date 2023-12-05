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

test('Test that ProjectListItem List works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoProjectsPage(testController);
  await listProjectPage.isDisplayed(testController);
  await listProjectPage.hasProject(testController); // test if the project is added
});

test('Test that ProjectListItem View works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoProjectsPage(testController);
  await listProjectPage.isDisplayed(testController);
  await listProjectPage.hasProject(testController); // test if the project is added
  await listProjectPage.gotoViewProjectPage(testController); // test view project
  await viewProjectPage.isDisplayed(testController);
});

test('Test that ProjectListItem Edit works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoProjectsPage(testController);
  await listProjectPage.isDisplayed(testController);
  await listProjectPage.hasProject(testController); // test if the project is added
  await listProjectPage.gotoEditProjectPage(testController); // test edit project
  await editProjectPage.isDisplayed(testController);
  await editProjectPage.editProject(testController, editproject);
  await navBar.gotoProjectsPage(testController);
  await listProjectPage.gotoViewProjectPage(testController);
  await viewProjectPage.checkView(testController, editproject);
});

test('Test that ProjectListItem Add works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoProjectsPage(testController); // test list projects
  await listProjectPage.isDisplayed(testController);
  await listProjectPage.gotoAddProjectPage(testController);
  await addProjectPage.isDisplayed(testController);
  await addProjectPage.addProject(testController, project); // test add project
  await navBar.gotoProjectsPage(testController);
  await listProjectPage.hasProject(testController); // test if the project is added
});
