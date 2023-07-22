# Ecommerce Web Automation

The following automation in Cypress is an exercise for learning that I did using the free API system [Serverest](https://serverest.dev/#/). I performed the test for the product registration and deletion features of the system.

## [Product Registration](/cypress/e2e/productRegistration.spec.cy.js)

This spec performs the registration of an administrator user on the website, so that we can then register a new product and, in the end, verify if it is indeed present in the list of products. Done through the [front-end of Serverest](https://front.serverest.dev/login).

## [Shopping Cart](/cypress/e2e/shoppingCart.spec.cy.js)

This spec performs the registration of a new shopping cart with a product. After that, it clears the cart, returns to the website's initial menu, and logs out of the site. Done through the [front-end of Serverest](https://front.serverest.dev/login) too.
