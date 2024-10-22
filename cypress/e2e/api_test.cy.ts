describe('DuckDuckGo API Test', () => {

  it('should fetch the Simpsons data and print the Icon URL if available', () => {
    cy.fixture('apiTestCase').then((query) => {   
      cy.request(`https://api.duckduckgo.com/?q=${query.string}&format=json`).then((response) => {
        expect(response.status).to.eq(200);
    
        const responseBody = typeof response.body === 'string' ? JSON.parse(response.body) : response.body;
    
        expect(responseBody).to.have.property('Abstract');
        expect(responseBody).to.have.property('AbstractSource');
        expect(responseBody).to.have.property('AbstractURL');
        expect(responseBody).to.have.property('RelatedTopics');
        
        const relatedTopics = responseBody.RelatedTopics;
        if (relatedTopics && relatedTopics.length > 0) {
          relatedTopics.forEach(topic => {
            if (topic.Icon && topic.Icon.URL) {
              const iconUrl = `https://duckduckgo.com${topic.Icon.URL}`;
              cy.log(`Icon URL: ${iconUrl}`);
            }
          });
        } else {
          cy.log('No icon URL found as Related Topics is empty in the response');
        }
      });
    });
  });

  it('should fetch the Simpsons data and print the Icon URL if available - custom command', () => {
    cy.fixture('apiTestCase').then((query) => {   
      cy.fetchDuckDuckGoIcon(query.string);
    });
  });
});
  