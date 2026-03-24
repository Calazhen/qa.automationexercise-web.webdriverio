const { $, browser } = require('@wdio/globals');

class HomePage {
    get btnSignupLogin () {
        return $('a[href="/login"]');
    }

    get btnDeleteAccount () {
        return $('a[href="/delete_account"]');
    }

    get accountDeletedMessage () {
        $('.dismiss-button').click();
        return $('h2[data-qa="account-deleted"]');
    }

    get btnContinue () {
        return $('a[data-qa="continue-button"]');
    }

    get loggedInAsUser () {
        return $('//a[contains(.,"Logged in as")]');
    }

    open () {
        return  browser.url("/")
    }

    async goToSignupLogin () {
        await this.btnSignupLogin.waitForDisplayed();
        await this.btnSignupLogin.click();
    }
    // del
    async deleteAccount () {
        /*const isDeleteVisible = await this.btnDeleteAccount.isDisplayed();
        if (!isDeleteVisible) {
            throw new Error('Delete Account button is not visible in the current page state.');
        }*/
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
