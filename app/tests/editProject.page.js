import { Selector } from 'testcafe';

class EditProjectPage {
  constructor() {
    this.pageId = '#edit-project-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async gotoListProjectPage(testController) {
    await testController.click('#list-project-page');
  }

  async editProject(testController, project) {
    await testController.typeText('#project-form-name', project.name, { replace: true });
    await testController.click('#project-form-submit input.btn.btn-primary');
    await testController.click('swal-button swal-button--confirm');
  }
}

export const editProjectPage = new EditProjectPage();
