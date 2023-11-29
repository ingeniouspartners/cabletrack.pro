import { Selector } from 'testcafe';

class AddProjectPage {
  constructor() {
    this.pageId = '#add-project-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async gotoListProjectPage(testController) {
    await testController.click('#list-project-page');
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
    await testController.typeText('#project-form-mail-state', project.mailAddress.state);
    await testController.typeText('#project-form-mail-zip', project.mailAddress.zip);
    // await testController.typeText('project-form-mailAddress-country', project.mailAddress.country);
    await testController.typeText('#project-form-ship-address', project.shipAddress.address);
    await testController.typeText('#project-form-ship-address2', project.shipAddress.address2);
    await testController.typeText('#project-form-ship-city', project.shipAddress.city);
    await testController.typeText('#project-form-ship-state', project.shipAddress.state);
    await testController.typeText('#project-form-ship-zip', project.shipAddress.zip);
    // await testController.typeText('project-form-shipAddress-country', project.shipAddress.country);
    await testController.click('#project-form-submit');
  }
}

export const addProjectPage = new AddProjectPage();
