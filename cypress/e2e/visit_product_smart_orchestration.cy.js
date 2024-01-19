/// <reference types="cypress" />
const {scrollIntoMiddleView} = require("../support/WebElementHelper");
const HomePage = require("../support/page_objects/HomePage");

describe('Validate Product page', () => {
    let homePage;
    let cloudPage

    before(() => {
        homePage = new HomePage();
    });

    it('Visit and verify Test Analytics in Smart Orchestration', () => {

        homePage.visitAndVerify();
        cloudPage = homePage.navigateToProductSmartOrchestration();
        cloudPage.verifyPage()

        scrollIntoMiddleView('p', 'Test Analytics')

        cloudPage.verifyTestAnalyticsIcon();

    })


})