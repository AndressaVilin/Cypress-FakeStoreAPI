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

Cypress.Commands.add('login', user => {
  return cy.request({
    method: "POST",
        url: '/auth/login',
        body: user,
        failOnStatusCode: false
  })
})

