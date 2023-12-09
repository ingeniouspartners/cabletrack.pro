import { Selector } from 'testcafe';
import { NavListCompany, PageEditCompany } from '../imports/api/testcafe/TestCafe';

class AddCompanyPage {
  constructor() {
    this.pageId = `#${PageEditCompany}`;
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async gotoListProjectPage(testController) {
    await testController.click(`#${NavListCompany}`);
  }

  async addCompany(testController, company) {
    await testController.typeText('#company-form-name', company.name);
    await testController.typeText('#company-form-mail-address', company.address.address);
    await testController.typeText('#company-form-mail-address2', company.address.address2);
    await testController.typeText('#company-form-mail-city', company.address.city);
    const selectState = Selector('#company-form-mail-state');
    await testController.click(selectState);
    await testController.click(selectState.find('option[value="AL"]'));
    await testController.typeText('#company-form-mail-zip', company.address.zip);
    await testController.typeText('#company-form-phone', company.phone);
    await testController.typeText('#company-form-fax', company.fax);
    await testController.typeText('#company-form-email', company.email);
    await testController.typeText('#company-form-logo', company.logoURL);
    await testController.typeText('#company-form-id', company._id);
    await testController.click('#company-form-submit input.btn.btn-primary');
    await testController.pressKey('space');
  }
}

export const addCompanyPage = new AddCompanyPage();
