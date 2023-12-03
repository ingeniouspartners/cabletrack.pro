import { signinPage } from './signin.page';
import { listCompanyPage } from './listCompany.page';
import { viewCompanyPage } from './viewCompany.page';
import { addCompanyPage } from './addCompany.page';
import { editCompanyPage } from './editCompany.page';
import { navBar } from './navbar.component';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'ceo@foo.com', password: 'changeme' };

fixture('company: cabletrack.pro localhost test with default db')
  .page('http://localhost:3000');

test('Test that Company List, View, Add and Edit work', async (testController) => {
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
