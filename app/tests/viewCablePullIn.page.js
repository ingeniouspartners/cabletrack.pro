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
    const navLink = Selector(`#${NavEditCablePullIn}`);
    await testController.click(navLink);
  }

  async gotoListCablePullInPage(testController) {
    const navLink = Selector(`#${NavListCablePullIn}`);
    await testController.click(navLink);
  }
}

export const viewCablePullInPage = new ViewCablePullInPage();
