describe('Interacting with new window (Use with caution!)', () => {
    it('interacts with new window', () => {
      cy.visit('http://localhost:3000');
  
      cy.window().then((win) => {
        cy.stub(win, 'open').as('windowOpen');
      });
  
      cy.get('#open-window-button').click();
  
      cy.get('@windowOpen').should('be.called');
  
      cy.window().then((win) => {
        win.location.href = 'about:blank'; // Reset to a blank page for stability
  
        // Add a temporary listener to catch the new window/tab opening
        win.addEventListener('DOMContentLoaded', (event) => {
            if (event.target.location.href.includes('http://localhost:3000/users')) {
                // Wrap the new window's contentWindow
                const newWindow = cy.wrap(event.target.contentWindow);
  
                //Perform actions in the new window
                newWindow.document().then((doc) => {
                    cy.wrap(doc.querySelector('#element-in-new-window')).should('exist');
                });
            }
        });
  
        //Trigger event that opens the page again. This might require a specific simulated action.
  
       // ... your actions to trigger loading the new URL ...
      });
  
  
    });
  });