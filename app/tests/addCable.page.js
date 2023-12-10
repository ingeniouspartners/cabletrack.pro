import { Selector } from 'testcafe';
import { ButtonSubmit, FieldName, NavListProject, PageEditCable, FieldDescription, FieldCostCode, FieldRefDrawingNo, FieldRefDrawingRev, FieldSystem, FieldBuilding, FieldZone, FieldOrigination, FieldTermination,
  FieldClassification, FieldCableType, FieldConductors, FieldVoltageCable, FieldVoltageTest, FieldNotes, FieldLengthPlanned,
} from '../imports/api/testcafe/TestCafe';

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
    const nameField = `#${FieldName}`;
    const descriptionField = `#${FieldDescription}`;
    const costCodeField = `#${FieldCostCode}`;
    const refDrawingNoField = `#${FieldRefDrawingNo}`;
    const refDrawingRevField = `#${FieldRefDrawingRev}`;
    const systemField = `#${FieldSystem}`;
    const buildingField = `#${FieldBuilding}`;
    const zoneField = `#${FieldZone}`;
    const originationField = `#${FieldOrigination}`;
    const terminationField = `#${FieldTermination}`;
    const lengthPlannedField = `#${FieldLengthPlanned}`;
    const classificationField = `#${FieldClassification}`;
    const cableTypeField = `#${FieldCableType}`;
    const conductorsField = `#${FieldConductors}`;
    const voltageCableField = `#${FieldVoltageCable}`;
    const voltageTestField = `#${FieldVoltageTest}`;
    const notesField = `#${FieldNotes}`;
    const submitButton = `#${ButtonSubmit} input.btn.btn-primary`;

    await testController.typeText(nameField, cable.name);
    await testController.typeText(descriptionField, cable.description);
    await testController.typeText(costCodeField, cable.costCode);
    await testController.typeText(refDrawingNoField, cable.refDrawingNo);
    await testController.typeText(refDrawingRevField, cable.refDrawingRev);
    await testController.typeText(systemField, cable.system);
    await testController.typeText(buildingField, cable.building);
    await testController.typeText(zoneField, cable.zone);
    await testController.typeText(originationField, cable.origination);
    await testController.typeText(terminationField, cable.termination);
    await testController.typeText(lengthPlannedField, cable.lengthPlanned.toString(), { replace: true });
    const selectClassification = Selector(classificationField);
    await testController.click(selectClassification);
    await testController.click(selectClassification.find(`option[value="${cable.classification}"]`));
    await testController.typeText(cableTypeField, cable.cableType);
    await testController.typeText(conductorsField, cable.conductors.toString(), { replace: true });
    await testController.typeText(voltageCableField, cable.voltageCable.toString(), { replace: true });
    await testController.typeText(voltageTestField, cable.voltageTest.toString(), { replace: true });
    await testController.typeText(notesField, cable.notes);
    await testController.click(submitButton);
    await testController.click('button.swal-button--confirm');
  }
}

export const addCablePage = new AddCablePage();
