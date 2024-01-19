class CloudPage {

    // Define locators as properties of the class
    secondNavigationTab = 'nav[aria-label=\'app descriptions navigation\']'

    constructor(baseURL = '/cloud', expectedTitle = 'Automated Software Testing Tools for CI | Cypress Cloud') {
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

    verifySecondaryNavDisplay(){
        cy.get(this.secondNavigationTab).should('be.visible')
    }

    verifyTestAnalyticsIcon(){
        cy.contains('p', 'Test Analytics').should('be.visible');
        cy.get('.icon-dark').should('be.visible');
        cy.get('[stroke-linecap="round"]').should('be.visible');
    }

    verifyVisualReviewsTextVisibleWithIcon(){
        cy.contains('p', 'Visual Reviews').should('be.visible');
        cy.get('.icon-dark').should('be.visible');
    }
}

export default CloudPage;
