                      
describe('Handling new windows', () => {
    it('checks new window opens with correct URL', () => {
      cy.visit('http://localhost:3000');
  
      // Stub the window.open function
      cy.stub(window, 'open').as('windowOpen');
  
      // Trigger the action that opens the window (e.g., clicking a button)
      cy.get('#open-window-button').click();
  
      // Assert window.open was called with the correct URL
      cy.get('@windowOpen').should('be.calledWith', 'http://localhost:3000/users', '_blank');
  
      // Optionally, make a request to the URL to verify it's accessible
      cy.request('http://localhost:3000/users').its('status').should('eq', 200);
    });
  });