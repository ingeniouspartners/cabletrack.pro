import { signinPage } from './signin.page';
import { listCompanyPage } from './listCompany.page';
import { viewCompanyPage } from './viewCompany.page';
import { addCompanyPage } from './addCompany.page';
import { editCompanyPage } from './editCompany.page';
import { navBar } from './navbar.component';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials1 = { username: 'admin@foo.com', password: 'changeme' };
const credentials2 = { username: 'ceo@foo.com', password: 'changeme' };

fixture('company: cabletrack.pro localhost test with default db')
  .page('http://localhost:3000');

test('Test that Company List works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials1.username, credentials1.password);
  await navBar.gotoListCompanyPage(testController);
  await listCompanyPage.isDisplayed(testController);
});

test('Test that Company View works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials2.username, credentials2.password);
  await navBar.gotoListCompanyPage(testController);
  await listCompanyPage.isDisplayed(testController);
  await listCompanyPage.gotoViewCompanyPage(testController);
  await viewCompanyPage.isDisplayed(testController);
});

test('Test that Company Add works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials2.username, credentials2.password);
  await navBar.gotoListCompanyPage(testController);
  await listCompanyPage.isDisplayed(testController);
  await listCompanyPage.gotoAddCompanyPage(testController);
  await addCompanyPage.isDisplayed(testController);
});

test('Test that Company Edit works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials2.username, credentials2.password);
  await navBar.gotoListCompanyPage(testController);
  await listCompanyPage.isDisplayed(testController);
  await listCompanyPage.gotoEditCompanyPage(testController);
  await editCompanyPage.isDisplayed(testController);
});
