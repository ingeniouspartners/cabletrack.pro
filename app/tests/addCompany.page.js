import { Selector } from 'testcafe';
import { ButtonSubmit, NavListCompany, PageEditCompany, FieldName, FieldAddress, FieldAddress2, FieldCity, FieldState, FieldZip, FieldCountry, FieldPhone, FieldFax, FieldEmail, FieldLogoURL }
  from '../imports/api/testcafe/TestCafe';

class AddCompanyPage {
  constructor() {
    this.pageId = `#${PageEditCompany}`;
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async gotoListProjectPage(testController) {
    await testController.click(`#${NavListCompany}`);
  }

  async addCompany(testController, company) {
    const nameField = `#${FieldName}`;
    const addressField = `#${FieldAddress}`;
    const address2Field = `#${FieldAddress2}`;
    const cityField = `#${FieldCity}`;
    const stateField = `#${FieldState}`;
    const zipField = `#${FieldZip}`;
    const countryField = `#${FieldCountry}`;
    const phoneField = `#${FieldPhone}`;
    const faxField = `#${FieldFax}`;
    const emailField = `#${FieldEmail}`;
    const logoURLField = `#${FieldLogoURL}`;
    const submitButton = `#${ButtonSubmit} input.btn.btn-primary`;

    await testController.typeText(nameField, company.name);
    await testController.typeText(addressField, company.address.address);
    await testController.typeText(address2Field, company.address.address2);
    await testController.typeText(cityField, company.address.city);
    const selectState = Selector(stateField);
    await testController.click(selectState);
    await testController.click(selectState.find(`option[value="${company.address.state}"]`));
    await testController.typeText(zipField, company.address.zip);
    const selectCountry = Selector(countryField);
    await testController.click(selectCountry);
    await testController.click(selectCountry.find(`option[value="${company.address.country}"]`));
    await testController.typeText(phoneField, company.phone);
    await testController.typeText(faxField, company.fax);
    await testController.typeText(emailField, company.email);
    await testController.typeText(logoURLField, company.logoURL);
    await testController.click(submitButton);
    await testController.click('button.swal-button--confirm');
  }
}

export const addCompanyPage = new AddCompanyPage();
