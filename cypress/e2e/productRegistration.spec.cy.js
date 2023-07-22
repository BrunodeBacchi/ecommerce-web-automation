const Chance = require('chance');
const chance = new Chance();

describe('backoffice spec', () => {
    it('passes', () => {
        cy.visit('https://front.serverest.dev/login');

        cy.get("[data-testid='cadastrar']").click();
        cy.get("[data-testid='nome']").type(chance.name());
        cy.get("[data-testid='email']").type(chance.email());
        cy.get("[data-testid='password']").type('teste');
        cy.get("[data-testid='checkbox']").click();
        cy.get("[data-testid='cadastrar']").click();
        cy.get("[data-testid='cadastrarProdutos']", { timeout: 10000}).click();
        cy.get("[data-testid='nome']").type("Playstation 6")
        cy.get("[data-testid='preco']").type("6000")
        cy.get("[data-testid='descricao']").type("Console novo")
        cy.get("[data-testid='quantity']").type("6")
        cy.get("[data-testid='cadastarProdutos']").click()
        cy.get("td", { timeout: 10000}).contains("Playstation 6").siblings("td").children(".center").children(".btn-danger").click()
    })
  })
