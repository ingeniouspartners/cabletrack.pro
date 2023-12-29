import { Selector } from 'testcafe';
import { ButtonConfirm, IconSuccess, NavListProject, PageEditProject, FieldName, ButtonSubmit } from '../imports/api/testcafe/TestCafe';

class EditProjectPage {
  constructor() {
    this.pageId = `#${PageEditProject}`;
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async gotoListProjectPage(testController) {
    await testController.click(`#${NavListProject}`);
  }

  async editProject(testController, project) {
    const nameField = `#${FieldName}`;
    const submitButton = `#${ButtonSubmit} input.btn.btn-primary`;

    await testController.typeText(nameField, project.name, { replace: true });
    await testController.click(submitButton);
    await testController.expect(Selector(IconSuccess).exists).ok();
    await testController.click(ButtonConfirm);
  }
}

export const editProjectPage = new EditProjectPage();
