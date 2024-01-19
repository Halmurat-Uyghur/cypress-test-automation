/// <reference types="cypress" />
const HomePage = require("../support/page_objects/HomePage");

describe('Validate installing guide', () => {
    let homePage;

    before(() => {
        homePage = new HomePage();
    });

    it('Visit and user can copy npm command', () => {

        homePage.visitAndVerify();
        homePage.clickInstallHeader();
        homePage.clickNpmInstallCommand();
        homePage.validateCommandCopiedAs('npm install cypress --save-dev')

    })

})