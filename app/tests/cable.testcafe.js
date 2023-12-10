import { signinPage } from './signin.page';
import { listProjectPage } from './listProject.page';
import { viewProjectPage } from './viewProject.page';
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
      conductors: '1',
      voltageCable: '120',
      voltageTest: '120',
      notes: 'This is a note.',
    };

const editcable = {
  name: 'Edit Cable',
};

test('Test that Cable List works', async (testController) => {
  await navBar.ensureLogout(testController);
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoListProjectPage(testController);
  await listProjectPage.isDisplayed(testController);
  await listProjectPage.gotoViewProjectPage(testController); // test view project
  await viewProjectPage.isDisplayed(testController);
  await viewProjectPage.gotoListCablePage(testController); // test list cables
  await listCablePage.isDisplayed(testController);
  await listCablePage.hasCable(testController, 1); // test if the cable is added
});

test('Test that Cable View works', async (testController) => {
  await navBar.ensureLogout(testController);
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoListProjectPage(testController);
  await listProjectPage.isDisplayed(testController);
  await listProjectPage.gotoViewProjectPage(testController); // test view project
  await viewProjectPage.isDisplayed(testController);
  await viewProjectPage.gotoListCablePage(testController); // test list cables
  await listCablePage.isDisplayed(testController);
  await listCablePage.hasCable(testController, 1); // test if the project is added
  await listCablePage.gotoViewCablePage(testController); // test view project
  await viewCablePage.isDisplayed(testController);
});

test('Test that Cable Edit works', async (testController) => {
  await navBar.ensureLogout(testController);
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoListProjectPage(testController);
  await listProjectPage.isDisplayed(testController);
  await listProjectPage.gotoViewProjectPage(testController); // test view project
  await viewProjectPage.isDisplayed(testController);
  await viewProjectPage.gotoListCablePage(testController); // test list cables
  await listCablePage.isDisplayed(testController);
  await listCablePage.hasCable(testController, 1); // test if the project is added
  await listCablePage.gotoEditCablePage(testController); // test view project
  await editCablePage.isDisplayed(testController);
  await editCablePage.editCable(testController, editcable);
});

test('Test that Cable Add works', async (testController) => {
  await navBar.ensureLogout(testController);
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoListProjectPage(testController);
  await listProjectPage.isDisplayed(testController);
  await listProjectPage.gotoViewProjectPage(testController); // test view project
  await viewProjectPage.isDisplayed(testController);
  await viewProjectPage.gotoListCablePage(testController); // test list cables
  await listCablePage.isDisplayed(testController);
  await listCablePage.gotoAddCablePage(testController); // test view project
  await addCablePage.isDisplayed(testController);
  await addCablePage.addCable(testController, cable); // test add cable
});
