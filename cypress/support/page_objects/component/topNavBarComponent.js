export class TopNavBarComponent {

    hoverDropdownByText(text) {
        cy.contains('a', text).trigger('mouseover');
    }

    clickDropdownByText(text) {
        cy.contains('a', text).click();
    }

    clickLogIn() {
        cy.get('[data-cy="header-login"]').should('be.visible').click();
    }

    clickInstallButton() {
        cy.get('[data-cy="header-install"]').should('be.visible').click();
    }

}

export const topNavBarComponent = new TopNavBarComponent();