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

const company =
  {
    name: 'A Test Company',
    address: {
      address: 'Address 123',
      address2: 'Address 456',
      city: 'The City',
      state: 'NY',
      zip: '12345',
      country: 'US'
    },
    phone: '123-456-7890',
    fax: '123-456-7890',
    email: 'something@something.com',
    logoURL: 'something.com',
    _id: 'IDK123',
  }

const editcompany = {
  name: 'Edit Company',
};

test('Test that Company List works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials1.username, credentials1.password);
  await navBar.gotoListCompanyPage(testController);
  await listCompanyPage.isDisplayed(testController);
  await listCompanyPage.hasCompany(testController); // test if the company is added

});

test('Test that Company View works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials2.username, credentials2.password);
  await navBar.gotoListCompanyPage(testController);
  await listCompanyPage.isDisplayed(testController);
  await listCompanyPage.hasCompany(testController); // test if the company is added
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
  await addCompanyPage.addCompany(testController, company); // test add project

});

test('Test that Company Edit works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials2.username, credentials2.password);
  await navBar.gotoListCompanyPage(testController);
  await listCompanyPage.isDisplayed(testController);
  await listCompanyPage.hasCompany(testController); // test if the company is added
  await listCompanyPage.gotoEditCompanyPage(testController);
  await editCompanyPage.isDisplayed(testController);
  await editCompanyPage.editCompany(testController, editcompany);
  //await navBar.gotoCompaniesPage(testController); Confused because of Companies versus company list
  await listCompanyPage.gotoViewCompanyPage(testController);
  await viewCompanyPage.checkView(testController, editcompany);
});
