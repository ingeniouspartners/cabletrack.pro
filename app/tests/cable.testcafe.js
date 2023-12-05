import { signinPage } from './signin.page';
import { listCablePage } from './listCable.page';
import { viewCablePage } from './viewCable.page';
import { addCablePage } from './addCable.page';
import { editCablePage } from './editCable.page';
import { navBar } from './navbar.component';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'ceo@foo.com', password: 'changeme' };

fixture('project: cabletrack.pro localhost test with default db')
  .page('http://localhost:3000');

const cable =
    {
      name: 'A Test Cable',
      description: 'Data for a test cable',
      costCode: 'SMT-123',
      refDrawingNo: 'BID789',
      refDrawingRev: '123-456-7890',
      system: '123-456-7890',
      building: 'something@something.com',
      zone: 'This is a secret note.',
      origination: 'An origination location',
      termination: 'A termination location',
      lengthPlanned: 100,
      classification: 'Power',
      cableType: 'Single',
      conductors: 'Copper',
      voltageCable: '120V',
      voltageTest: '120V',
      notes: 'This is a note.',
    };
const editcable = {
  name: 'Edit Cable',
};

test('Test that CableListItem List works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoProjectsPage(testController);
  await listCablePage.isDisplayed(testController);
  await listCablePage.hasProject(testController); // test if the project is added
});

test('Test that ProjectListItem View works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoCablesPage(testController);
  await listCablePage.isDisplayed(testController);
  await listCablePage.hasProject(testController); // test if the project is added
  await listCablePage.gotoViewProjectPage(testController); // test view project
  await viewCablePage.isDisplayed(testController);
});

test('Test that ProjectListItem Edit works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoProjectsPage(testController);
  await listCablePage.isDisplayed(testController);
  await listCablePage.hasProject(testController); // test if the project is added
  await listCablePage.gotoEditProjectPage(testController); // test edit project
  await editCablePage.isDisplayed(testController);
  await editCablePage.editProject(testController, editproject);
});

test('Test that ProjectListItem Add works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoProjectsPage(testController);
  await listCablePage.isDisplayed(testController);
  await listCablePage.gotoAddProjectPage(testController);
  await addCablePage.isDisplayed(testController);
  await addCablePage.addProject(testController, cable); // test add project
});
