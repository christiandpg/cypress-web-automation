import SearchResultPage from "./SearchResultPage";

class HomePage {
  visit() {
    cy.visit('/');
  }
  
  searchFor(term: string) {
    cy.get('input#searchbox_input')
      .should('be.visible')
      .type(term);

    cy.get('button[type="submit"]')
      .should('be.enabled')
      .click();

    return new SearchResultPage();
  } 
}
  
export default HomePage;
  