import { Selector } from 'testcafe';
import { PageEditCablePullIn, NavListCablePullIn } from '../imports/api/testcafe/TestCafe';

class AddCablePullInPage {
  constructor() {
    this.pageId = `#${PageEditCablePullIn}`;
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async gotoListCablePullInPage(testController) {
    await testController.click(`#${NavListCablePullIn}`);
  }
}

export const addCablePullInPage = new AddCablePullInPage();
