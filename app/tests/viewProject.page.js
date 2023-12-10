import { Selector } from 'testcafe';
import { NavEditProject, NavListCable } from '../imports/api/testcafe/TestCafe';

class ViewProjectPage {
  constructor() {
    this.pageId = '#view-project-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async gotoEditProjectPage(testController) {
    await testController.click(`#${NavEditProject}`);
  }

  async gotoListCablesPage(testController) {
    await testController.click(`#${NavListCable}`);
  }

  async checkView(testController, project) {
    const edit = Selector('h1').innerText;
    await testController.expect(edit).eql(project.name);
  }
}

export const viewProjectPage = new ViewProjectPage();
