import HomePage from "./HomePage";

class AboutUsPage {

    // Define locators as properties of the class
    readFullStoryLink = 'a[href=\'/about-us/our-story\']';

    constructor(baseURL = '/about-us', expectedTitle = 'About Cypress | Cypress.io Testing Tools (Component Tests & More)') {
        this.baseURL = baseURL;
        this.expectedTitle = expectedTitle;
    }

    verifyPage() {
        this.assertUrlAndTitle();
    }

    assertUrlAndTitle() {
        cy.url().should('include', this.baseURL);
        cy.title().should('eq', this.expectedTitle);
    }

    verifyHeaderIsCorrect(){
        cy.contains('h1', 'About us').should('be.visible')
        cy.contains('h1', 'About us').should('be.visible').contains(' About us ')
    }

}

export default AboutUsPage;
