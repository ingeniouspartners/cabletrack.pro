import { Selector } from 'testcafe';
import { NavListProject, PageEditProject } from '../imports/api/testcafe/TestCafe';

class AddProjectPage {
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

  async addProject(testController, project) {
    await testController.typeText('#project-form-name', project.name);
    await testController.typeText('#project-form-code', project.code);
    await testController.typeText('#project-form-contract', project.contract);
    await testController.typeText('#project-form-bidNumber', project.bidNumber);
    await testController.typeText('#project-form-jobPhone', project.jobPhone);
    await testController.typeText('#project-form-jobFax', project.jobFax);
    await testController.typeText('#project-form-jobEmail', project.jobEmail);
    await testController.typeText('#project-form-notes', project.notes);
    await testController.typeText('#project-form-mail-address', project.mailAddress.address);
    await testController.typeText('#project-form-mail-address2', project.mailAddress.address2);
    await testController.typeText('#project-form-mail-city', project.mailAddress.city);
    const selectState = Selector('#project-form-mail-state');
    await testController.click(selectState);
    await testController.click(selectState.find('option[value="AL"]'));
    await testController.typeText('#project-form-mail-zip', project.mailAddress.zip);
    // await testController.typeText('project-form-mailAddress-country', project.mailAddress.country);
    await testController.typeText('#project-form-ship-address', project.shipAddress.address);
    await testController.typeText('#project-form-ship-address2', project.shipAddress.address2);
    await testController.typeText('#project-form-ship-city', project.shipAddress.city);
    const selectState2 = Selector('#project-form-ship-state');
    await testController.click(selectState2);
    await testController.click(selectState2.find('option[value="AL"]'));
    await testController.typeText('#project-form-ship-zip', project.shipAddress.zip);
    // await testController.typeText('project-form-shipAddress-country', project.shipAddress.country);
    await testController.click('#project-form-submit input.btn.btn-primary');
    await testController.click('button.swal-button--confirm');
  }
}

export const addProjectPage = new AddProjectPage();
