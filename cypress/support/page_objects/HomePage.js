import WebElementHelper from '../WebElementHelper';
import {topNavBarComponent} from "./component/topNavBarComponent";
import AboutUsPage from "./AboutUsPage";
import CloudPage from "./CloudPage";

class HomePage {

    // Define locators as properties of the class
    copyCommandButtonOnModel = '[data-cy="modal-install-copy"';

    constructor(baseURL = 'https://www.cypress.io/', expectedTitle = 'JavaScript Component Testing and E2E Testing Framework | Cypress') {
        this.baseURL = baseURL;
        this.expectedTitle = expectedTitle;
    }

    visitAndVerify() {
        cy.visit(this.baseURL);
        this.assertUrlAndTitle();
    }

    assertUrlAndTitle() {
        // Validate the URL
        cy.url().should('include', this.baseURL);
        // Validate the title
        cy.title().should('eq', this.expectedTitle);
    }

    validate_download_numbers(expectedDownloadNumber) {
        cy.contains('div', 'Weekly downloads').prev().should('be.visible').should('contain', expectedDownloadNumber);
        cy.contains('div', 'Weekly downloads').prev().invoke('text').should('match', /^\d+M\+$/); // Validate it's a number
    }

    scrollToWeeklyDownloads() {
        WebElementHelper.scrollIntoMiddleView('div', 'Weekly downloads');
    }

    scrollToLovedByOSS() {
        WebElementHelper.scrollIntoMiddleView('h2', 'Loved by OSS, trusted by Enterprise');
    }


    navigateToAboutCypress() {
        //hover over “Product” menu
        topNavBarComponent.hoverDropdownByText('Company ');
        cy.contains('span', 'About Cypress').should('be.visible').click();
        return new AboutUsPage();
    }

    navigateToProductSmartOrchestration() {
        //hover over “Product” menu
        topNavBarComponent.hoverDropdownByText('Product');
        cy.contains('span', 'Smart Orchestration').should('be.visible').click();
        return new CloudPage();
    }

    navigateToProductVisualReviews() {
        //hover over “Product” menu
        topNavBarComponent.hoverDropdownByText('Product')
        cy.contains('span', 'Visual Reviews').should('be.visible').click();
        return new CloudPage();

    }

    clickInstallHeader() {
        topNavBarComponent.clickInstallButton();
    }

    clickNpmInstallCommand() {
        cy.get(this.copyCommandButtonOnModel).contains('npm install cypress').should('be.visible')
        cy.get(this.copyCommandButtonOnModel).should('be.visible').click()
    }

    validateCommandCopiedAs(expectedCommand) {
        cy.window().then((win) => {
            win.navigator.clipboard.readText().then((clipboardText) => {
                console.log(clipboardText);
                expect(clipboardText).to.equal(expectedCommand);
            })
        });
    }

}

export default HomePage;