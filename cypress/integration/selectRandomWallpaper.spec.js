/// <reference types="Cypress" />

const context = window.context;
const cy = window.cy;

context('Random Wallpaper', () => {
  it('Apply a random wallpaper to the body', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid="random-wallpaper"]').click();
    cy.get('[data-testid="photo-credit"]').should('be.visible');
  });
});
