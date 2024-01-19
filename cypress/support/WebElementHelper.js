class WebElementHelper {
    static clickElement(selector) {
        cy.get(selector).click();
    }

    static typeInElement(selector, text) {
        cy.get(selector).type(text);
    }

    static elementShouldBeVisible(selector) {
        cy.get(selector).should('be.visible');
    }

    static elementShouldContainText(selector, text) {
        cy.get(selector).should('contain', text);
    }

    static elementShouldNotBeVisible(selector) {
        cy.get(selector).should('not.be.visible');
    }

    static elementShouldHaveAttribute(selector, attribute, value) {
        cy.get(selector).should('have.attr', attribute, value);
    }

    static elementShouldNotHaveAttribute(selector, attribute) {
        cy.get(selector).should('not.have.attr', attribute);
    }

    static scrollToElement(selector) {
        cy.get(selector).scrollIntoView()
            .should('be.visible')
            .catch(error => {
                throw new Error(`Failed to scroll to element: ${selector}. Error: ${error.message}`);
            });
    }

    static scrollIntoMiddleView(selector, text) {
        cy.contains(selector, text).then(($el) => {
            cy.window().then((win) => {
                const top = $el.offset().top - win.innerHeight / 2;
                cy.scrollTo('top', top);
            });
        });
    }

}
export default WebElementHelper;