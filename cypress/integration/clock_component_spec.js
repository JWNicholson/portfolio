describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('http://localhost:3000') 

      
     })

    it('contains greeting',() => {
        cy.contains('Time is ')
    }) 

    it('shows the clock greeting', () => {
        cy.get('[data-cy=clockGreeting]').should('be.visible')
    })
  })

    


