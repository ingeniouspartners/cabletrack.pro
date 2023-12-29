import { Selector } from 'testcafe';
import { ButtonConfirm, IconSuccess, NavListProject, PageEditProject, FieldName, FieldCode, FieldContract, FieldBidNumber, FieldPhone, FieldFax, FieldEmail, FieldNotes, FieldAddress, FieldAddress2, FieldCity, FieldState,
  FieldZip, FieldCountry, FieldShipAddress, FieldShipAddress2, FieldShipCity, FieldShipState, FieldShipZip, FieldShipCountry, ButtonSubmit } from '../imports/api/testcafe/TestCafe';

class AddProjectPage {
  constructor() {
    this.pageId = `#${PageEditProject}`;
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async gotoListProjectPage(testController) {
    await testController.click(`#${NavListProject}`);
  }

  async addProject(testController, project) {
    const nameField = `#${FieldName}`;
    const codeField = `#${FieldCode}`;
    const contractField = `#${FieldContract}`;
    const bidNumberField = `#${FieldBidNumber}`;
    const phoneField = `#${FieldPhone}`;
    const faxField = `#${FieldFax}`;
    const emailField = `#${FieldEmail}`;
    const notesField = `#${FieldNotes}`;
    const addressField = `#${FieldAddress}`;
    const address2Field = `#${FieldAddress2}`;
    const cityField = `#${FieldCity}`;
    const stateField = `#${FieldState}`;
    const zipField = `#${FieldZip}`;
    const countryField = `#${FieldCountry}`;
    const shipAddressField = `#${FieldShipAddress}`;
    const shipAddress2Field = `#${FieldShipAddress2}`;
    const shipCityField = `#${FieldShipCity}`;
    const shipStateField = `#${FieldShipState}`;
    const shipZipField = `#${FieldShipZip}`;
    const shipCountryField = `#${FieldShipCountry}`;
    const submitButton = `#${ButtonSubmit} input.btn.btn-primary`;

    await testController.typeText(nameField, project.name);
    await testController.typeText(codeField, project.code);
    await testController.typeText(contractField, project.contract);
    await testController.typeText(bidNumberField, project.bidNumber);
    await testController.typeText(phoneField, project.jobPhone);
    await testController.typeText(faxField, project.jobFax);
    await testController.typeText(emailField, project.jobEmail);
    await testController.typeText(notesField, project.notes);
    await testController.typeText(addressField, project.mailAddress.address);
    await testController.typeText(address2Field, project.mailAddress.address2);
    await testController.typeText(cityField, project.mailAddress.city);
    const selectState = Selector(stateField);
    await testController.click(selectState);
    await testController.click(selectState.find(`option[value="${project.mailAddress.state}"]`));
    await testController.typeText(zipField, project.mailAddress.zip);
    const selectCountry = Selector(countryField);
    await testController.click(selectCountry);
    await testController.click(selectCountry.find(`option[value="${project.mailAddress.country}"]`));
    await testController.typeText(shipAddressField, project.shipAddress.address);
    await testController.typeText(shipAddress2Field, project.shipAddress.address2);
    await testController.typeText(shipCityField, project.shipAddress.city);
    const selectState2 = Selector(shipStateField);
    await testController.click(selectState2);
    await testController.click(selectState2.find(`option[value="${project.shipAddress.state}"]`));
    await testController.typeText(shipZipField, project.shipAddress.zip);
    const selectCountry2 = Selector(shipCountryField);
    await testController.click(selectCountry2);
    await testController.click(selectCountry2.find(`option[value="${project.shipAddress.country}"]`));
    await testController.click(submitButton);
    await testController.expect(Selector(IconSuccess).exists).ok();
    await testController.click(ButtonConfirm);
  }
}

export const addProjectPage = new AddProjectPage();
