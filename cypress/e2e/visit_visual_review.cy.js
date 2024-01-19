/// <reference types="cypress" />
const HomePage = require("../support/page_objects/HomePage");

describe('Validate home page', () => {

    let homePage;
    let cloudPage;

    before(() => {
        homePage = new HomePage();
    });

    it('Visit and navigate to Visual reviews section', () => {

        homePage.visitAndVerify();
        cloudPage = homePage.navigateToProductVisualReviews();

        cloudPage.verifyVisualReviewsTextVisibleWithIcon();

    })



})