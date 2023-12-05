import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { navBar } from './navbar.component';
import { signupPage } from './signup.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'ceo@foo.com', password: 'changeme' };

fixture('tests: cabletrack.pro localhost test with default db')
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

/** Create a random string of a specific length */
function randomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return `${result}@foo.com`;
}

// Create a random username and password for testing.
const username = randomString(8);
const password = randomString(8);

test('Test that the signup works - user can create an account', async (testController) => {
  await navBar.gotoSignUpPage(testController);
  await signupPage.signupUser(testController, username, password);
});

test('Test that the newly creaeted user can sign in - account is saved in database', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, username, password);
});

test('Test that a user can\'t signup if username is already used.', async (testController) => {
  await navBar.gotoSignUpPage(testController);
  await signupPage.signupExistingUsername(testController, username, password);
});
