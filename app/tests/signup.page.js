import { Selector } from 'testcafe';
import { navBar } from './navbar.component';

class SignupPage {
  constructor() {
    this.pageId = '#signup-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  /** Signs up a new user, then checks to see that they are logged in by checking the navbar. */
  async signupUser(testController, username, password) {
    await this.isDisplayed(testController);
    await testController.typeText('#signup-form-email', username);
    await testController.typeText('#signup-form-password', password);
    await testController.click('#signup-form-submit input.btn.btn-primary');
    await navBar.isLoggedIn(testController, username);
  }

  /** Trying to signup an existing user - it shouldn't proceed and the error should be shown */
  async signupExistingUsername(testController, username, password) {
    await this.isDisplayed(testController);
    await testController.typeText('#signup-form-email', username);
    await testController.typeText('#signup-form-password', password);
    await testController.click('#signup-form-submit input.btn.btn-primary');
    await testController.expect(Selector('#failed-registration').withText('Username already exists.').visible).ok();
    await this.isDisplayed(testController);
  }
}

export const signupPage = new SignupPage();
