const { expect } = require('@wdio/globals')
const HomePage = require('../../pageobjects/home.page')
const { faker } = require('@faker-js/faker')
const RegisterPage = require('../../pageobjects/register.page')

describe('User story 02 - Excluir conta de usuário padrão', () => {
    it('should register a new user and delete account successfully', async () => {
      
      //Arrange
        const username = faker.person.firstName()
        const emailAddress = faker.internet.email({ provider: 'example.com' })

        const userData = {
            password: faker.internet.password(),
            day: '10',
            month: faker.date.month(),
            year: '1995',
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            company: faker.company.name(),
            address1: faker.location.streetAddress(),
            address2: faker.location.streetAddress(),
            country: 'Canada',
            state: faker.location.state(),
            city: faker.location.city(),
            zipcode: faker.location.zipCode('#####'),
            mobileNumber: faker.phone.number('##########')
        }

        //Act
        await HomePage.open()
        await HomePage.goToSignupLogin()
        await RegisterPage.startSignup(username, emailAddress)
        await RegisterPage.fillAccountDetails(userData)
        await RegisterPage.enableNewsletters()
        await RegisterPage.fillFormDetails(userData)
        await RegisterPage.createAccount()
        await RegisterPage.continueAfterCreation()
        await HomePage.deleteAccount()
        
        //Assert
        await browser.pause(3000);
        await expect(HomePage.accountDeletedMessage).toBeDisplayed()
        await expect(HomePage.btnContinue).toBeDisplayed()
    })
})