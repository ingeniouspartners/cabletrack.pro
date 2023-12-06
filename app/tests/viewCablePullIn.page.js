import { Selector } from 'testcafe';
import { NavEditCablePullIn, PageViewCablePullIn, NavListCablePullIn } from '../imports/api/testcafe/TestCafe';

class ViewCablePullInPage {
  constructor() {
    this.pageId = `#${PageViewCablePullIn}`;
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async gotoEditCablePullInPage(testController) {
    await testController.click(`#${NavEditCablePullIn}`);
  }

  async gotoListCablePullInPage(testController) {
    await testController.click(`#${NavListCablePullIn}`);
  }
}

export const viewCablePullInPage = new ViewCablePullInPage();
