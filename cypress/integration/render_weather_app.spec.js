describe('Rendering weather widget', () => {
    it('Displays weatherApp elements', () => {

       cy.visit('http://localhost:3000/weather');

       cy.get('[data-id="wthrApp-ctnr"]')
            .should('exist')
            
        cy.get('[data-id="wthrApp-h1"]')
            .should('exist')
            .contains('Weather App')

        cy.get('[data-id="wthrApp-card"]')
            .should('exist')
        
        cy.get('[data-id="wthrApp-cardHeader"]')
            .should('exist')

    });
    



});