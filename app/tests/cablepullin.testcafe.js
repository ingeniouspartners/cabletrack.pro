import { signinPage } from './signin.page';
import { listProjectPage } from './listProject.page';
import { viewProjectPage } from './viewProject.page';
import { listCablePage } from './listCable.page';
import { viewCablePage } from './viewCable.page';
import { listCablePullInPage } from './listCablePullIn.page';
import { viewCablePullInPage } from './viewCablePullIn.page';
import { addCablePullInPage } from './addCablePullIn.page';
import { editCablePullInPage } from './editCablePullIn.page';
import { navBar } from './navbar.component';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'elec@foo.com', password: 'changeme' };

const pullInAdd = {
  lengthInstalled: 100,
  pulledHand: true,
  notes: 'This is a note.',
};

const pullInEdit = {
  lengthInstalled: 100,
  pulledHand: false,
  tugger: 'Tugger 1',
  tuggerCalibrationID: 'Calibration 1',
  maxPullingTension: 45,
  notes: 'This is a note.',
};

fixture('PullIn: cabletrack.pro localhost test with default db')
  .page('http://localhost:3000');

test('PullIn List works', async (t) => {
  await listCablePullInPage.hasCablePullIn(t, 0);
})
  .before(async t => {
    await navBar.ensureLogout(t);
    await navBar.gotoSignInPage(t);
    await signinPage.signin(t, credentials.username, credentials.password);
    await navBar.gotoListProjectPage(t);
    await listProjectPage.isDisplayed(t);
    await listProjectPage.hasProject(t, 1);
    await listProjectPage.gotoViewProjectPage(t);
    await viewProjectPage.isDisplayed(t);
    await viewProjectPage.gotoListCablePage(t);
    await listCablePage.isDisplayed(t);
    await listCablePage.hasCable(t, 1);
    await listCablePage.gotoViewCablePage(t);
    await viewCablePage.isDisplayed(t);
    await viewCablePage.gotoListCablePullInPage(t);
    await listCablePullInPage.isDisplayed(t);
  });

test('PullIn Add works', async (t) => {
  await listCablePullInPage.gotoAddCablePullInPage(t);
  await addCablePullInPage.isDisplayed(t);
  await addCablePullInPage.addPullIn(t, pullInAdd);
})
  .before(async t => {
    await navBar.ensureLogout(t);
    await navBar.gotoSignInPage(t);
    await signinPage.signin(t, credentials.username, credentials.password);
    await navBar.gotoListProjectPage(t);
    await listProjectPage.isDisplayed(t);
    await listProjectPage.hasProject(t, 1);
    await listProjectPage.gotoViewProjectPage(t);
    await viewProjectPage.isDisplayed(t);
    await viewProjectPage.gotoListCablePage(t);
    await listCablePage.isDisplayed(t);
    await listCablePage.hasCable(t, 1);
    await listCablePage.gotoViewCablePage(t);
    await viewCablePage.isDisplayed(t);
    await viewCablePage.gotoListCablePullInPage(t);
    await listCablePullInPage.isDisplayed(t);
  });

test('PullIn View works', async (t) => {
  await listCablePullInPage.hasCablePullIn(t, 1);
  await listCablePullInPage.gotoViewCablePullInPage(t);
  await viewCablePullInPage.isDisplayed(t);
})
  .before(async t => {
    await navBar.ensureLogout(t);
    await navBar.gotoSignInPage(t);
    await signinPage.signin(t, credentials.username, credentials.password);
    await navBar.gotoListProjectPage(t);
    await listProjectPage.isDisplayed(t);
    await listProjectPage.hasProject(t, 1);
    await listProjectPage.gotoViewProjectPage(t);
    await viewProjectPage.isDisplayed(t);
    await viewProjectPage.gotoListCablePage(t);
    await listCablePage.isDisplayed(t);
    await listCablePage.hasCable(t, 1);
    await listCablePage.gotoViewCablePage(t);
    await viewCablePage.isDisplayed(t);
    await viewCablePage.gotoListCablePullInPage(t);
    await listCablePullInPage.isDisplayed(t);
  });

test('PullIn Edit works', async (t) => {
  await listCablePullInPage.hasCablePullIn(t, 1);
  await listCablePullInPage.gotoEditCablePullInPage(t);
  await editCablePullInPage.isDisplayed(t);
  await editCablePullInPage.editPullIn(t, pullInEdit);
})
  .before(async t => {
    await navBar.ensureLogout(t);
    await navBar.gotoSignInPage(t);
    await signinPage.signin(t, credentials.username, credentials.password);
    await navBar.gotoListProjectPage(t);
    await listProjectPage.isDisplayed(t);
    await listProjectPage.hasProject(t, 1);
    await listProjectPage.gotoViewProjectPage(t);
    await viewProjectPage.isDisplayed(t);
    await viewProjectPage.gotoListCablePage(t);
    await listCablePage.isDisplayed(t);
    await listCablePage.hasCable(t, 1);
    await listCablePage.gotoViewCablePage(t);
    await viewCablePage.isDisplayed(t);
    await viewCablePage.gotoListCablePullInPage(t);
    await listCablePullInPage.isDisplayed(t);
  });
