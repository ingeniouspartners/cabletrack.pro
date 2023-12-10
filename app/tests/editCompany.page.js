import { Selector } from 'testcafe';
import {
  ButtonSubmit,
  ElementName,
  NavListCompany,
  PageEditCompany,
} from '../imports/api/testcafe/TestCafe';

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
    const nameElement = `#${ElementName}`;
    const submitButton = `#${ButtonSubmit} input.btn.btn-primary`;

    await testController.typeText(nameElement, company.name, { replace: true });
    await testController.click(submitButton);
    await testController.click('button.swal-button--confirm');
  }
}

export const editCompanyPage = new EditCompanyPage();
