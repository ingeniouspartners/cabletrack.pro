import { Selector } from 'testcafe';
import { NavAddCompany, NavEditCompany, NavViewCompany, PageListCompany } from '../imports/api/testcafe/TestCafe';

class ListCompanyPage {
  constructor() {
    this.pageId = `#${PageListCompany}`;
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async gotoViewCompanyPage(testController) {
    await testController.click(`#${NavViewCompany}`);
  }

  async gotoAddCompanyPage(testController) {
    await testController.click(`#${NavAddCompany}`);
  }

  async gotoEditCompanyPage(testController) {
    await testController.click(`#${NavEditCompany}`);
  }

  async hasCompany(testController) {
    const companyCount = Selector('tr').count;
    await testController.expect(companyCount).gte(3);
  }
}

export const listCompanyPage = new ListCompanyPage();
