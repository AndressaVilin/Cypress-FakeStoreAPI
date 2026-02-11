Cypress.Commands.add('getAllProducts', () => {
    return cy.request({
        method: 'GET',
        url: '/products'
    })
})

Cypress.Commands.add('getProductById', (id) => {
    return cy.request({
      method: 'GET',
      url: `/products/${id}`
    })
  })

Cypress.Commands.add('addNewProduct', produto => {
  return cy.request({
    method: 'POST',
    url: '/products',
    body: produto
  })
})

