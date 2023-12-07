import { Selector } from 'testcafe';
import { NavListCompany, PageEditCompany } from '../imports/api/testcafe/TestCafe';

class EditCompanyPage {
  constructor() {
    this.pageId = `#${PageEditCompany}`;
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async gotoProjectPage(testController) {
    await testController.click(`#${NavListCompany}`);
  }
  async editCompany(testController, company) {
    await testController.typeText('#company-form-name', company.name, { replace: true });
    await testController.click('#company-form-submit input.btn.btn-primary');
    await testController.pressKey('space');
  }
}

export const editCompanyPage = new EditCompanyPage();
