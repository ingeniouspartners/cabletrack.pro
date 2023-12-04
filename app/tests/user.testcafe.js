import { navBar } from './navbar.component';
import { signinPage } from './signin.page';
import { viewUserPage } from './viewUser.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'ceo@foo.com', password: 'changeme' };

fixture('cabletrack.pro localhost test with default db')
  .page('http://localhost:3000');

test('Test that View User works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoProfilePage(testController);
  await viewUserPage.isDisplayed(testController);
  await viewUserPage.gotoEditUserPage(testController);
});
