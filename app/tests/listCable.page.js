import { Selector } from 'testcafe';
import { NavAddCable, NavEditCable, NavViewCable, PageListCable } from '../imports/api/testcafe/TestCafe';

class ListCablePage {
  constructor() {
    this.pageId = `#${PageListCable}`;
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async gotoViewCablePage(testController) {
    await testController.click(`#${NavViewCable}`);
  }

  async gotoAddCablePage(testController) {
    await testController.click(`#${NavAddCable}`);
  }

  async gotoEditCablePage(testController) {
    await testController.click(`#${NavEditCable}`);
  }

  async hasCable(testController) {
    const projectCount = Selector('tr').count;
    await testController.expect(projectCount).gte(1);
  }
}

export const listCablePage = new ListCablePage();
