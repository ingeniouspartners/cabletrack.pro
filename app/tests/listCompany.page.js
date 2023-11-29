import { Selector } from 'testcafe';

class ListCompanyPage {
  constructor() {
    this.pageId = '#list-company-nav';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async gotoViewCompanyPage(testController) {
    await testController.click('#view-company-page');
  }

  async gotoAddCompanyPage(testController) {
    await testController.click('#add-company-page');
  }

  async gotoEditCompanyPage(testController) {
    await testController.click('#edit-company-page');
  }
}

export const listCompanyPage = new ListCompanyPage();
