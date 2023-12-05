import { Selector } from 'testcafe';
import { NavListProject, PageEditCable } from '../imports/api/testcafe/TestCafe';

class AddCablePage {
  constructor() {
    this.pageId = `#${PageEditCable}`;
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async gotoListCablePage(testController) {
    await testController.click(`#${NavListProject}`);
  }

  async addCable(testController, cable) {
    await testController.typeText('#cable-form-name', cable.name);
    await testController.typeText('#cable-form-description', cable.description);
    await testController.typeText('#cable-form-costCode', cable.costCode);
    await testController.typeText('#cable-form-refDrawingNo', cable.refDrawingNo);
    await testController.typeText('#cable-form-refDrawingRev', cable.refDrawingRev);
    await testController.typeText('#cable-form-system', cable.system);
    await testController.typeText('#cable-form-building', cable.building);
    await testController.typeText('#cable-form-zone', cable.zone);
    await testController.typeText('#cable-form-origination', cable.origination);
    await testController.typeText('#cable-form-termination', cable.termination);
    await testController.typeText('#cable-form-lengthPlanned', cable.lengthPlanned);
    await testController.typeText('#cable-form-classification', cable.classification);
    await testController.typeText('#cable-form-cableType', cable.cableType);
    await testController.typeText('#cable-form-conductors', cable.conductors);
    await testController.typeText('#cable-form-voltageCable', cable.voltageCable);
    await testController.typeText('#cable-form-voltageTest', cable.voltageTest);
    await testController.typeText('#cable-form-notes', cable.notes);
    await testController.click('#cable-form-submit input.btn.btn-primary');
    await testController.click('button.swal-button--confirm');
  }
}

export const addCablePage = new AddCablePage();
