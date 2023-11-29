import { Selector } from 'testcafe';

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
}

export const viewCompanyPage = new ViewCompanyPage();
