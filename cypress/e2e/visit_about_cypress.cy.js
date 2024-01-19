/// <reference types="cypress" />
import HomePage from '../support/page_objects/HomePage';

describe('Validate About us', () => {
    let homePage;
    let aboutUsPage;

    before(() => {
         homePage = new HomePage();
    });

    it('Visit and navigate to About Cypress page', () => {
        homePage.visitAndVerify()
        aboutUsPage = homePage.navigateToAboutCypress();

        aboutUsPage.verifyPage()
        aboutUsPage.verifyHeaderIsCorrect()

    })

})