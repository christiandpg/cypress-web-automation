Cypress.Commands.add('fetchDuckDuckGoIcon', (query) => {
    return cy.request(`https://api.duckduckgo.com/?q=${query}&format=json`)
      .then((response) => {
        expect(response.status).to.eq(200);

        const icon = response.body.Icon;
        if (icon && icon.URL) {
            console.log(`Icon: ${icon}`);
            console.log(`Icon URL: ${iconUrl}`);
        //   return `https://duckduckgo.com${icon.URL}`;
            return icon.URL;
        }
        return null;
      });
  });