describe('Handling new tabs', () => {
  it('checks link opens in new tab with correct URL', () => {
    cy.visit('http://localhost:3000');

    // Find the link and get its href attribute
    cy.get('a[target="_blank"]').then((link) => {
      const url = link.prop('href');

      // Stub the window.open function
      cy.stub(window, 'open').as('windowOpen');

      // Click the link
      cy.get('a[target="_blank"]').click();

      // Assert window.open was called with the correct URL
      cy.get('@windowOpen').should('be.calledWith', url, '_blank');

      // Optionally, make a request to the URL to verify it's accessible
      cy.request(url).its('status').should('eq', 200);
    });
  });
});

// http://localhost:3000