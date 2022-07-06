/// <reference types="cypress" />

describe('Homepage', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('should have a skip link', () => {
        cy.get('[data-testid="skipLink"]').should('exist');
    });
    it('should have a skip link with the text Skip to Content', () => {
        cy.contains('Skip to Content');
    });
    it('should have a skip link that can take focus', () => {
        cy.get('[data-testid="skipLink"]').focus();
        cy.focused().should('have.text', 'Skip to Content');
    });
    it('should have a skip link which when clicked will route to main_content url', () => {
        cy.get('[data-testid="skipLink"]').click();
        cy.url().should('include', '#main_content');
    });
    it('should have a link to navigate to the Best Food of the World list', () => {
        cy.get('[data-testid="article-Food"]').should('exist');
        cy.get('[data-testid="article-Food"]').click();
        cy.url().should('include', '/food');
    });
});

describe('View Food List', () => {
    beforeEach(() => {
        cy.visit('/food');
    });
    it('should have sort field buttons', () => {
        cy.get('[data-testid="sortButtons__field"]').should('exist');
        cy.get('[data-testid="sortButtons__field"] > menu')
            .children()
            .should('have.length', 3);
    });
    it('should have sort order buttons', () => {
        cy.get('[data-testid="sortButtons__order"]').should('exist');
        cy.get('[data-testid="sortButtons__order"] > menu')
            .children()
            .should('have.length', 2);
    });
    it('should have a food list', () => {
        cy.get('[data-testid="foodlist"]').should('exist');
    });
    it('should have a food list with 14 children', () => {
        cy.get('[data-testid="foodlist"]').children().should('have.length', 14);
    });
});
