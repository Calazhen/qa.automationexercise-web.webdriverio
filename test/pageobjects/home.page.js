const { $, browser } = require('@wdio/globals');

class HomePage {

    //Métodos acessores aos seletores
    get btnSignupLogin () { return $('a[href="/login"]'); }
    get btnDeleteAccount () { return $('a[href="/delete_account"]'); }
    get accountDeletedMessage () { $('.dismiss-button').click(); return $('h2[data-qa="account-deleted"]'); }
    get btnContinue () { return $('a[data-qa="continue-button"]'); }
    get loggedInAsUser () { return $('//a[contains(.,"Logged in as")]'); }

    // Método para abrir o browser na página definida como BaseUrl
    open () {
        return  browser.url("/")
    }

    // Navega até a página de Cadastro e login 
    async goToSignupLogin () {
        await this.btnSignupLogin.waitForDisplayed();
        await this.btnSignupLogin.click();
    }
    // Clica no botão para excluir a conta recém criada.
    async deleteAccount () {
        await this.btnDeleteAccount.isDisplayed();
        await this.btnDeleteAccount.waitForDisplayed({ timeout: 20000 });
        await this.btnDeleteAccount.scrollIntoView();
        await this.btnDeleteAccount.waitForClickable({ timeout: 20000 });
        try {
            await this.btnDeleteAccount.click();
        } catch (error) {
            await browser.execute((el) => el.click(), await this.btnDeleteAccount);
        }
    }
}

module.exports = new HomePage();
