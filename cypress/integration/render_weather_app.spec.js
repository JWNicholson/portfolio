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

        cy.get('[data-id="wthrApp-searchBox-ctnr"]')
            .should('exist')

        cy.get('[data-id="wthrApp-searchBox-input"]')
            .should('exist')
            .should('have.value','')

        cy.get('[data-id="wthrApp-car-icon-ctnr"]')
            .should('exist')

        cy.get('[data-id="wthrApp-car-desc-ctnr"]')
            .should('exist')

    });
    



});