/// <reference types="Cypress" />

const context = window.context;
const cy = window.cy;

context('Select a Wallpaper from the Featured Collections', () => {
  it('The user can select a specific image from the Featured Collections', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid="select-from-featured-images"]').click();
    cy.get('[data-testid="featured-collections"]')
      .children()
      .eq(2)
      .click();
    cy.get('[data-testid="collection-images"]')
      .children()
      .eq(2)
      .click();
    cy.get('[data-testid="photo-credit"]').should('be.visible');
  });
});
