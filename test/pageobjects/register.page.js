const { $ } = require('@wdio/globals');


class RegisterPage {
    get inputSignupName () { return $('input[data-qa="signup-name"]'); }
    get inputSignupEmail () { return $('input[data-qa="signup-email"]'); }
    get btnSignup () { return $('button[data-qa="signup-button"]'); }
    get radioTitleMr () { return $('#id_gender1'); }
    get inputPassword () { return $('input[data-qa="password"]'); }
    get selectDays () { return $('#days'); }
    get selectMonths () { return $('#months'); }
    get selectYears () { return $('#years'); }
    get checkNewsletter () { return $('#newsletter'); }
    get checkOptin () { return $('#optin'); }
    get inputFirstName () { return $('input[data-qa="first_name"]'); }
    get inputLastName () { return $('input[data-qa="last_name"]'); }
    get inputCompany () { return $('input[data-qa="company"]'); }
    get inputAddress1 () { return $('input[data-qa="address"]'); }
    get inputAddress2 () { return $('input[data-qa="address2"]'); }
    get selectCountry () { return $('select[data-qa="country"]'); }
    get inputState () { return $('input[data-qa="state"]'); }
    get inputCity () { return $('input[data-qa="city"]'); }
    get inputZipcode () { return $('input[data-qa="zipcode"]'); }
    get inputMobileNumber () { return $('input[data-qa="mobile_number"]'); }
    get btnCreateAccount () { return $('button[data-qa="create-account"]'); }
    get accountCreatedMessage () { return $('h2[data-qa="account-created"]'); }
    get btnContinue () { return $('a[data-qa="continue-button"]'); }

    async startSignup (name, email) {
        await this.inputSignupName.waitForDisplayed();
        await this.inputSignupName.setValue(name);
        await this.inputSignupEmail.setValue(email);
        await this.btnSignup.click();
    }

    async fillAccountDetails ({ password, day, month, year }) {
        await this.radioTitleMr.waitForDisplayed();
        await this.radioTitleMr.click();
        await this.inputPassword.setValue(password);
        await this.selectDays.selectByVisibleText(day);
        await this.selectMonths.selectByVisibleText(month);
        await this.selectYears.selectByVisibleText(year);
    }

    async enableNewsletters () {
        await this.checkNewsletter.click();
        await this.checkOptin.click();
    }

    async fillFormDetails(user) {
        await this.inputFirstName.setValue(user.firstName);
        await this.inputLastName.setValue(user.lastName);
        await this.inputCompany.setValue(user.company);
        await this.inputAddress1.setValue(user.address1);
        await this.inputAddress2.setValue(user.address2);
        await this.selectCountry.selectByVisibleText(user.country);
        await this.inputState.setValue(user.state);
        await this.inputCity.setValue(user.city);
        await this.inputZipcode.setValue(user.zipcode);
        await this.inputMobileNumber.setValue(user.mobileNumber);
    }

    async createAccount () {
        await this.btnCreateAccount.click();
        await this.accountCreatedMessage.waitForDisplayed();
    }

    async continueAfterCreation () {
        await this.btnContinue.waitForDisplayed();
        await this.btnContinue.scrollIntoView();
        await this.btnContinue.click();
    }
}

module.exports = new RegisterPage();
