describe('Handling new tabs in Cypress', () => {
    it('should open a link in a new tab and verify the content', () => {
      // Visit the initial page
      cy.visit('http://localhost:3000');
  
      // Find the link that opens a new tab and get its href attribute
      cy.get('a[target="_blank"]').then(($link) => {
        const href = $link.prop('href');
  
        // Visit the URL directly
        cy.visit(href);
  
        // Perform assertions on the new page
        cy.url().should('include', '/users');
        cy.get('h1').should('contain', 'Users');
      });
    });
  });
                    