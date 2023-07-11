describe('template spec', () => {
  let userID;

  beforeEach( () => {
    if (userID) {
      cy.wrap(null).then(() => {
        cy.request({
          method: 'DELETE',
          url: 'https://serverest.dev/usuarios/${userID}',
          auth: {
            username: 'beltrano@qa.com.br',
            password: 'teste'
          }
        })
      })
    }
  })
  
  it('passes', () => {
    cy.visit('https://front.serverest.dev/login');

    cy.get("[data-testid='cadastrar']").click();
    cy.get("[data-testid='nome']").type('Rafael');
    cy.get("[data-testid='email']").type('rafael13@qa.com.br');
    cy.get("[data-testid='password']").type('teste');
    cy.get("[data-testid='cadastrar']").click();
    
    cy.request({
      method: 'GET',
      url: 'https://serverest.dev/usuarios',
      auth: {
        username: 'beltrano@qa.com.br',
        password: 'teste'
      }
    }).then((response) => {
      const users = response.body;
      for (let i = 0; i < users.length; i++) {
        if (users[i].email === 'rafael13@qa.com.br') {
          userID = users[i]._id;
          break;
        }
      }
    });

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