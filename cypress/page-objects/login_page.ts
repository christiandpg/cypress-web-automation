import HomePage from "./home_page";

class LoginPage {

  visit() {
    cy.visit('/');
  }
  
  login(email: string, password: string) {
    cy.get('input#user-name')
      .should('be.visible')
      .type(email);

    cy.get('input#password')
      .should('be.visible')
      .type(password);
    
    cy.get('input#login-button')
      .should('be.enabled')
      .click();

    return new HomePage();
  } 
}
  
export default LoginPage;
  