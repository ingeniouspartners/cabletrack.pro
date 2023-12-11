import { Selector } from 'testcafe';
import { PageViewUser, NavEditUser } from '../imports/api/testcafe/TestCafe';

class ViewUserPage {
  constructor() {
    this.pageId = `#${PageViewUser}`;
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async gotoEditUserPage(testController) {
    await testController.click(`#${NavEditUser}`);
  }
}

export const viewUserPage = new ViewUserPage();
