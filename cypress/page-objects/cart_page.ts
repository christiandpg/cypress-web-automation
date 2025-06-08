import CheckoutPage from "./checkout_page";

class CartPage {

  clickCheckoutButton() {
    cy.get('button[data-test="checkout"]').should('be.visible').click();

    return new CheckoutPage();
  }
  
}

export default CartPage;
  