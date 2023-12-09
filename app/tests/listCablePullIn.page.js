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
    const navLink = Selector(`#${NavAddCablePullIn}`);
    await testController.click(navLink);
  }

  async gotoEditCablePullInPage(testController) {
    const navLink = Selector(`#${NavEditCablePullIn}`);
    await testController.click(navLink);
  }

  async gotoViewCablePullInPage(testController) {
    const navLink = Selector(`#${NavViewCablePullIn}`);
    await testController.click(navLink);
  }
}

export const listCablePullInPage = new ListCablePullInPage();
