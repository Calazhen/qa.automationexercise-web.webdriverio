const { $, browser } = require('@wdio/globals')

class LoginPage {
  
    //Métodos get  para acessar os seletores
    get btnSignupLogin () { return $('a[href="/login"]'); }
    get btnDeleteAccount () { return $('a[href="/delete_account"]'); }
    get accountDeletedMessage () { $('.dismiss-button').click(); return $('h2[data-qa="account-deleted"]'); }
    get btnContinue () { return $('a[data-qa="continue-button"]'); }
    get loggedInAsUser () { return $('//a[contains(.,"Logged in as")]'); }

    // Método para ingressar na pagina de registro de usuário (com username e e-mail)
    async newUserSignUp (username, emailAddress) {
        await this.inputName.setValue(username);
        await this.inputEmailAddress.setValue(emailAddress);
        await this.btnSignUp.click();
    }

}

module.exports = new LoginPage();
