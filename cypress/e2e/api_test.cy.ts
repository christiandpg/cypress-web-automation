describe('DuckDuckGo API Test', () => {
    it('should fetch the Simpsons data and print the Icon URL if available', () => {
        cy.fetchDuckDuckGoIcon('simpson').then((iconUrl: string) => {
            if (iconUrl) {
              console.log(`Icon URL: ${iconUrl}`);
            } else {
              console.log('Icon URL is null or undefined');
            }
        });
    });
  });
  