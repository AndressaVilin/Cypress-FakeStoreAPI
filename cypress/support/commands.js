Cypress.Commands.add('getAllProducts', () => {
    cy.request({
        method: 'GET',
        url: '/products'
    })
})