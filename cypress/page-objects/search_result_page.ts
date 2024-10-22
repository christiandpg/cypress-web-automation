class SearchResultPage {

  verifyTitlesContain(term: string) {
    cy.get('[data-testid="result-title-a"] > span')
      .should('have.length.greaterThan', 0)
      .each(($el) => {
        const title = $el.text();
        expect(title.toLowerCase()).to.include(term.toLowerCase());
      });
    
    return this;
  }

  openRegionFilter() {
    cy.get('a[data-testid="region-filter-label"]')
      .should('be.visible')
      .click();

    return this;  
  }

  assertRegionsCount(count: number = 10) {
    cy.get('[data-testid="dropdown-options"]')
      .should('be.visible')
      .find('div:nth-of-type(2) > div > div > div > div')
      .then(($elements) => {
        const totalCount = $elements.length;
        cy.log(`Total count: ${totalCount}`);
        expect(totalCount).to.be.greaterThan(count);
      });
  }
}

export default SearchResultPage;
  