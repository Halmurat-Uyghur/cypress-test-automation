/// <reference types="cypress" />
import HomePage from "../support/page_objects/HomePage";

describe('Validate home page', () => {

    let homePage;

    before(() => {
        homePage = new HomePage();
    });

    it('Visit and check downloads total number', () => {

        homePage.visitAndVerify();
        homePage.scrollToLovedByOSS();

        homePage.validate_download_numbers('5M+')

    })

})