import { Selector } from 'testcafe';
import { NavListCompany, NavListProject, NavViewCompany, NavViewUser } from '../imports/api/testcafe/TestCafe';

class NavBar {

  /** If someone is logged in, then log them out, otherwise do nothing. */
  async ensureLogout(testController) {
    const loggedInUser = await Selector('#navbar-current-user').exists;
    if (loggedInUser) {
      await testController.click('#navbar-current-user');
      const visible = await Selector('#basic-navbar-nav').visible;
      if (!visible) {
        await testController.click('#basic-navbar-toggle');
      }
      await testController.click('#navbar-sign-out');
    }
  }

  async gotoSignInPage(testController) {
    await this.ensureLogout(testController);
    const visible = await Selector('#basic-navbar-nav').visible;
    if (!visible) {
      await testController.click('#basic-navbar-toggle');
    }
    await testController.click('#login-dropdown');
    await testController.click('#login-dropdown-sign-in');
  }

  /** Check that the specified user is currently logged in. */
  async isLoggedIn(testController, username) {
    const visible = await Selector('#basic-navbar-nav').visible;
    if (!visible) {
      await testController.click('#basic-navbar-toggle');
    }
    const loggedInUser = Selector('#navbar-current-user').innerText;
    await testController.expect(loggedInUser).eql(username);
  }

  /** Check that someone is logged in, then click items to logout. */
  async logout(testController) {
    const visible = await Selector('#basic-navbar-nav').visible;
    if (!visible) {
      await testController.click('#basic-navbar-toggle');
    }
    await testController.expect(Selector('#navbar-current-user').exists).ok();
    await testController.click('#navbar-current-user');
    await testController.click('#navbar-sign-out');
  }

  /** Pull down login menu, go to sign up page. */
  async gotoSignUpPage(testController) {
    await this.ensureLogout(testController);
    const visible = await Selector('#basic-navbar-nav').visible;
    if (!visible) {
      await testController.click('#basic-navbar-toggle');
    }
    await testController.click('#login-dropdown');
    await testController.click('#login-dropdown-sign-up');
  }

  async gotoListCompanyPage(testController) {
    const id = `#${NavListCompany}`;
    await testController.click(id);
  }

  async gotoViewCompanyPage(testController) {
    const id = `#${NavViewCompany}`;
    await testController.click(id);
  }

  async gotoListProjectPage(testController) {
    const id = `#${NavListProject}`;
    await testController.click(id);
  }

  async gotoProfilePage(testController) {
    const visible = await Selector('#basic-navbar-nav').visible;
    if (!visible) {
      await testController.click('#basic-navbar-toggle');
    }
    const visible2 = await Selector(`#${NavViewUser}`).visible;
    if (!visible2) {
      await testController.click('#navbar-current-user');
    }
    await testController.click(`#${NavViewUser}`);
  }
}

export const navBar = new NavBar();
