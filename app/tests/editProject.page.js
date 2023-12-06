import { Selector } from 'testcafe';
import { NavListProject, PageEditProject } from '../imports/api/testcafe/TestCafe';

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
    await testController.typeText('#project-form-name', project.name, { replace: true });
    await testController.click('#project-form-submit input.btn.btn-primary');
    await testController.click('button.swal-button--confirm');
  }
}

export const editProjectPage = new EditProjectPage();
