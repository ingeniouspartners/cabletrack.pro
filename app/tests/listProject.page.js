import { Selector } from 'testcafe';
import { NavAddProject, NavEditProject, NavViewProject } from '../imports/api/testcafe/TestCafe';

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
    await testController.click(`#${NavViewProject}`);
  }

  async gotoAddProjectPage(testController) {
    await testController.click(`#${NavAddProject}`);
  }

  async gotoEditProjectPage(testController) {
    await testController.click(`#${NavEditProject}`);
  }

  async hasProject(testController) {
    const projectCount = Selector('tr').count;
    await testController.expect(projectCount).gte(1);
  }
}

export const listProjectPage = new ListProjectPage();
