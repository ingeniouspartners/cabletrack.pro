import { Selector } from 'testcafe';
import { NavEditCable, PageViewCable } from '../imports/api/testcafe/TestCafe';

class ViewCablePage {
  constructor() {
    this.pageId = `#${PageViewCable}`;
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async gotoEditCablePage(testController) {
    await testController.click(`#${NavEditCable}`);
  }

  async checkView(testController, cable) {
    const edit = Selector('h1').innerText;
    await testController.expect(edit).eql(cable.name);
  }
}

export const viewCablePage = new ViewCablePage();
