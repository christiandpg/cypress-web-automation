class CheckoutPage {

  fillInUserInformation(firstName: string, lastName: string, zip:string) {
    cy.get('input[data-test="firstName"]')
      .should('be.visible')
      .type(firstName);

    cy.get('input[data-test="lastName"]')
      .should('be.visible')
      .type(lastName);

    cy.get('input[data-test="postalCode"]')
      .should('be.visible')
      .type(zip);

    return this;
  } 

  clickContinueButton(){
    cy.get('input[data-test="continue"]')
      .should('be.enabled')
      .click();

    return this;
  }

  clickOnFinish() {
    cy.get('button[data-test="finish"]')
      .should('be.enabled')
      .click();

    return this;
  }

  verifyOrderComplete() {
    cy.get('h2[data-test="complete-header"]').contains('Thank you for your order!');
    cy.get('div[data-test="complete-text"]').contains('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
    return this;
  }
}

export default CheckoutPage;
  