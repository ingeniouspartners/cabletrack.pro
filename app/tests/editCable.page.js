import { Selector } from 'testcafe';
import { NavListCable, PageEditCable, FieldName, ButtonSubmit, IconSuccess, ButtonConfirm } from '../imports/api/testcafe/TestCafe';

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
    const nameField = `#${FieldName}`;
    const submitButton = `#${ButtonSubmit} input.btn.btn-primary`;
    await testController.typeText(nameField, cable.name, { replace: true });
    await testController.click(submitButton);
    await testController.expect(Selector(IconSuccess).exists).ok();
    await testController.click(ButtonConfirm);
  }
}

export const editCablePage = new EditCablePage();
