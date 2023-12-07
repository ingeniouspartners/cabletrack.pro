import { Selector } from 'testcafe';

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
    await testController.click('#edit-project-nav');
  }

  async gotoListCablePage(testController) {
    await testController.click('#list-cable-nav');
  }

  async checkView(testController, project) {
    const edit = Selector('h1').innerText;
    await testController.expect(edit).eql(project.name);
  }
}

export const viewProjectPage = new ViewProjectPage();
