import { Selector } from 'testcafe';
import { PageEditCablePullIn } from '../imports/api/testcafe/TestCafe';

class EditCablePullInPage {
  constructor() {
    this.pageId = `#${PageEditCablePullIn}`;
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const editCablePullInPage = new EditCablePullInPage();
