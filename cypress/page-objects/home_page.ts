import CartPage from "./cart_page";

class HomePage {

  verifyLogin() {
    return cy.url().should('include', '/inventory.html');
  }

  addRandomProductToCart() {
    cy.get('button[data-test="add-to-cart-sauce-labs-backpack"]').then(($buttons) => {
      const count = $buttons.length;
      cy.log(`Found ${count} Add to Cart buttons`);
      const randomIndex = Math.floor(Math.random() * count);
      cy.wrap($buttons[randomIndex]).click();
    });

    return this;
  }

  verifyRemoveButtonExists() {
    cy.get('button#remove-sauce-labs-backpack').should('be.visible');

    return this;
  }
  
  goToCart() {
    cy.get('div#shopping_cart_container')
      .should('be.visible')
      .click();

    return new CartPage();
  } 
}
  
export default HomePage;
  