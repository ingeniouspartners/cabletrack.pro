import { Selector } from 'testcafe';
import { ButtonSubmit, NavListCompany, PageEditCompany, ElementName, ElementAddress, ElementAddress2, ElementCity, ElementState, ElementZip, ElementCountry, ElementPhone, ElementFax, ElementEmail, ElementLogoURL }
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
    const nameElement = `#${ElementName}`;
    const addressElement = `#${ElementAddress}`;
    const address2Element = `#${ElementAddress2}`;
    const cityElement = `#${ElementCity}`;
    const stateElement = `#${ElementState}`;
    const zipElement = `#${ElementZip}`;
    const countryElement = `#${ElementCountry}`;
    const phoneElement = `#${ElementPhone}`;
    const faxElement = `#${ElementFax}`;
    const emailElement = `#${ElementEmail}`;
    const logoURLElement = `#${ElementLogoURL}`;
    const submitButton = `#${ButtonSubmit} input.btn.btn-primary`;

    await testController.typeText(nameElement, company.name);
    await testController.typeText(addressElement, company.address.address);
    await testController.typeText(address2Element, company.address.address2);
    await testController.typeText(cityElement, company.address.city);
    const selectState = Selector(stateElement);
    await testController.click(selectState);
    await testController.click(selectState.find(`option[value="${company.address.state}"]`));
    await testController.typeText(zipElement, company.address.zip);
    const selectCountry = Selector(countryElement);
    await testController.click(selectCountry);
    await testController.click(selectCountry.find(`option[value="${company.address.country}"]`));
    await testController.typeText(phoneElement, company.phone);
    await testController.typeText(faxElement, company.fax);
    await testController.typeText(emailElement, company.email);
    await testController.typeText(logoURLElement, company.logoURL);
    await testController.click(submitButton);
    await testController.click('button.swal-button--confirm');
  }
}

export const addCompanyPage = new AddCompanyPage();
