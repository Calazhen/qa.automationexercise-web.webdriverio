const { $, browser } = require('@wdio/globals')

class LoginPage {
  
    get inputName () {
        return $('input[data-qa="signup-name"]');
    }

    get inputEmailAddress () {
        return $('input[data-qa="signup-email"]');
    }

    get btnSignUp () {
        return $('button[data-qa="signup-button"]');
    }

    get inputLoginEmail () {
        return $('input[data-qa="login-email"]');
    }

    get inputLoginPassword () {
        return $('input[data-qa="login-password"]');
    }

    get btnLogin () {
        return $('button[data-qa="login-button"]');
    }


    async newUserSignUp (username, emailAddress) {
        await this.inputName.setValue(username);
        await this.inputEmailAddress.setValue(emailAddress);
        await this.btnSignUp.click();
    }

    open () {
        return browser.url('/login');
    }
}

module.exports = new LoginPage();
