describe('Transações', () => {
  it('Transações', () => {
    cy.visit('https://dev-finance.netlify.app/')
    cy.contains("Nova Transação").click()
    cy.get('#description').type('Uber')
    cy.get('#amount').type('20')
    cy.get('#date').type('2025-02-17')
    cy.get('button').click()

    
    cy.contains("Nova Transação").click()
    cy.get('#description').type('almoço')
    cy.get('#amount').type('-50')
    cy.get('#date').type('2025-02-17')
    cy.get('button').click()

        //cy.visit('https://dev-finance.netlify.app/')
        cy.get('[data-index="1"] > :nth-child(4) > img').click()

    })

  

  })