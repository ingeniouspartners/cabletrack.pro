import { Selector } from 'testcafe';
import { NavListCable, PageEditCable, ElementName, ButtonSubmit } from '../imports/api/testcafe/TestCafe';

class EditCablePage {
  constructor() {
    this.pageId = `#${PageEditCable}`;
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async gotoCablePage(testController) {
    await testController.click(`#${NavListCable}`);
  }

  async editCable(testController, cable) {
    const nameElement = `#${ElementName}`;
    const submitButton = `#${ButtonSubmit} input.btn.btn-primary`;
    await testController.typeText(nameElement, cable.name, { replace: true });
    await testController.click(submitButton);
    await testController.click('button.swal-button--confirm');
  }
}

export const editCablePage = new EditCablePage();
