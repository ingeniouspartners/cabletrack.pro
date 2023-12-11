import { Selector } from 'testcafe';
import { PageListCable } from '../imports/api/testcafe/TestCafe';

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
    await testController.click('#view-cable-nav');
  }

  async gotoAddCablePage(testController) {
    await testController.click('#add-cable-nav');
  }

  async gotoEditCablePage(testController) {
    await testController.click('#edit-cable-nav');
  }

  async hasCable(testController, cnt) {
    const cableCount = Selector('tr').count;
    await testController.expect(cableCount).gte(cnt);
  }
}

export const listCablePage = new ListCablePage();
