import { Selector } from 'testcafe';
import { FieldName } from '../imports/api/testcafe/TestCafe';

class ViewCompanyPage {
  constructor() {
    this.pageId = '#view-company-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async gotoListProjectPage(testController) {
    await testController.click('#list-project-page');
  }

  async checkView(testController, company) {
    const nameField = Selector(`#${FieldName}`);
    const edit = nameField.innerText;
    await testController.expect(edit).eql(company.name);
  }
}

export const viewCompanyPage = new ViewCompanyPage();
