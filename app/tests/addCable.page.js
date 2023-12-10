import { Selector } from 'testcafe';
import { ButtonSubmit, ElementName, NavListProject, PageEditCable, ElementDescription, ElementCostCode, ElementRefDrawingNo, ElementRefDrawingRev, ElementSystem, ElementBuilding, ElementZone, ElementOrigination, ElementTermination,
  ElementClassification, ElementCableType, ElementConductors, ElementVoltageCable, ElementVoltageTest, ElementNotes, // ElementLengthPlanned,
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
    const nameElement = `#${ElementName}`;
    const descriptionElement = `#${ElementDescription}`;
    const costCodeElement = `#${ElementCostCode}`;
    const refDrawingNoElement = `#${ElementRefDrawingNo}`;
    const refDrawingRevElement = `#${ElementRefDrawingRev}`;
    const systemElement = `#${ElementSystem}`;
    const buildingElement = `#${ElementBuilding}`;
    const zoneElement = `#${ElementZone}`;
    const originationElement = `#${ElementOrigination}`;
    const terminationElement = `#${ElementTermination}`;
    // const lengthPlannedElement = `#${ElementLengthPlanned}`;
    const classificationElement = `#${ElementClassification}`;
    const cableTypeElement = `#${ElementCableType}`;
    const conductorsElement = `#${ElementConductors}`;
    const voltageCableElement = `#${ElementVoltageCable}`;
    const voltageTestElement = `#${ElementVoltageTest}`;
    const notesElement = `#${ElementNotes}`;
    const submitButton = `#${ButtonSubmit} input.btn.btn-primary`;

    await testController.typeText(nameElement, cable.name);
    await testController.typeText(descriptionElement, cable.description);
    await testController.typeText(costCodeElement, cable.costCode);
    await testController.typeText(refDrawingNoElement, cable.refDrawingNo);
    await testController.typeText(refDrawingRevElement, cable.refDrawingRev);
    await testController.typeText(systemElement, cable.system);
    await testController.typeText(buildingElement, cable.building);
    await testController.typeText(zoneElement, cable.zone);
    await testController.typeText(originationElement, cable.origination);
    await testController.typeText(terminationElement, cable.termination);
    // await testController.typeText(lengthPlannedElement, cable.lengthPlanned, { replace: true });
    const selectClassification = Selector(classificationElement);
    await testController.click(selectClassification);
    await testController.click(selectClassification.find(`option[value="${cable.classification}"]`));
    await testController.typeText(cableTypeElement, cable.cableType);
    await testController.typeText(conductorsElement, cable.conductors);
    await testController.typeText(voltageCableElement, cable.voltageCable);
    await testController.typeText(voltageTestElement, cable.voltageTest);
    await testController.typeText(notesElement, cable.notes);
    await testController.click(submitButton);
    await testController.click('button.swal-button--confirm');
  }
}

export const addCablePage = new AddCablePage();
