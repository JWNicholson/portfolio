describe('Rendering weather widget', () => {
    it('Displays weatherApp elements', () => {

       cy.visit('http://localhost:3000/weather');

       cy.get('[data-id="App-header"]')
            .should('exist')

       cy.get('[data-id="toolbar"]')

       cy.get('[data-id="side-drawer"]')
            .should('exist')
            .should('not.be.visible')

       cy.get('[data-id="main-footer"]')
            .should('exist')

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

        cy.get('[data-id="wthrApp-searchBox-in-btn"]')
            .should('exist')

        cy.get('[data-id="wthrApp-searchBox-in-city"]')
            .should('exist')
            .should('have.value','')

        cy.get('[data-id="wthrApp-searchBox-in-country"]')
            .should('exist')
            .should('have.value','')

        cy.get('[data-id="wthrApp-car-icon-ctnr"]')
            .should('exist')

        cy.get('[data-id="wthrApp-car-desc-ctnr"]')
            .should('exist')

    });
    

});


// // variable to hold screen sizes for responsive tesing
// const sizes = ['iphone-6',  'samsung-note9', [768,600]]

// //small screen testing - for each size in sizes variable ...
// describe('side-drawer', () => {
//     sizes.forEach((size) => {
//         it(`Should not initially display 0n ${size} screen`, () => {
//             if(Cypress._.isArray(size)) {
//                 cy.viewport(size[0], size[1])
//             }else {
//                 cy.viewport(size)
//             }

//             cy.visit('http://localhost:3000/weather')
//             cy.get('data-id="side-drawer"')
//                 .should('not.be.visible')
//         })
//     }) 
// });