import { Selector } from 'testcafe';
import { PageListCablePullIn, NavEditCablePullIn, NavAddCablePullIn, NavViewCablePullIn } from '../imports/api/testcafe/TestCafe';

class ListCablePullInPage {
  constructor() {
    this.pageId = `#${PageListCablePullIn}`;
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async hasCablePullIn(testController, count) {
    const projectCount = Selector('tr').count;
    await testController.expect(projectCount).gte(count);
  }

  async gotoAddCablePullInPage(testController) {
    await testController.click(`#${NavAddCablePullIn}`);
  }

  async gotoEditCablePullInPage(testController) {
    await testController.click(`#${NavEditCablePullIn}`);
  }

  async gotoViewCablePullInPage(testController) {
    await testController.click(`#${NavViewCablePullIn}`);
  }
}

export const listCablePullInPage = new ListCablePullInPage();
