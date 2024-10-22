import HomePage from '../page-objects/home_page';
import SearchResultPage from '../page-objects/search_result_page';

describe('DuckDuckGo Search Test', { testIsolation: false }, () => {
  const homePage = new HomePage();
  const searchResultPage = new SearchResultPage();

  before(() => {
    homePage.visit();
  });

  it('Test Case 1: should search and verify all result titles contain the search term', () => {
    cy.fixture('firstTestCase').then((searchString) => {
      homePage
      .searchFor(searchString.term)
      .verifyTitlesContain(searchString.term);
    })    
  });

  it('Test Case 2: should open the region filter and verify the total count of regions', () => {
    searchResultPage
      .openRegionFilter()
      .assertRegionsCount();
  });

});
