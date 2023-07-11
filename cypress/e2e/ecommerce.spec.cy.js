const Chance = require('chance');
const chance = new Chance();

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://front.serverest.dev/login');

    cy.get("[data-testid='cadastrar']").click();
    cy.get("[data-testid='nome']").type(chance.name());
    cy.get("[data-testid='email']").type(chance.email());
    cy.get("[data-testid='password']").type('teste');
    cy.get("[data-testid='cadastrar']").click();
    cy.get("[data-testid='adicionarNaLista']", { timeout: 10000})
    .eq(1)
    .click();
    cy.get("h1");
    cy.get("[data-testid='shopping-cart-product-name']");
    cy.get("[data-testid='limparLista']").click();
    cy.get("[data-testid='shopping-cart-empty-message']");
    cy.get("[data-testid='paginaInicial']").click();
    cy.get("h1");
    cy.get("[data-testid='logout']").click()
  })
})