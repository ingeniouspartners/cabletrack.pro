import { Selector } from 'testcafe';

class ListProjectPage {
  constructor() {
    this.pageId = '#list-project-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async gotoViewProjectPage(testController) {
    await testController.click('#view-project-page');
  }

  async gotoAddProjectPage(testController) {
    await testController.click('#add-project-page');
  }

  async hasProject(testController) {
    const projectCount = Selector('tr').count;
    await testController.expect(projectCount).gte(2);
  }
}

export const listProjectPage = new ListProjectPage();
