describe('API Products', () => {
  it('GET /products deve retornar status 200', () => {
    cy.getAllProducts()
    .then(response => {
      expect(response.status).to.equal(200)
    })
  })

  it('GET /products deve retornar um array de objetos', () => {
    cy.getAllProducts()
    .then(response => {
      expect(response.body).to.be.an('array')
      expect(response.body[1]).to.be.an('object')
    })
  })

  it('GET /products/:id deve conter todos os campos obrigatórios do produto', () => {
    cy.getAllProducts()
    .then(response => {
      const product = response.body[1]

      expect(product).to.have.property('id')
      expect(product).to.have.property('title')
      expect(product).to.have.property('price')
      expect(product).to.have.property('description')
      expect(product).to.have.property('category')
      expect(product).to.have.property('image')
      expect(product).to.have.property('rating')
      expect(product.rating).to.have.property('rate')
      expect(product.rating).to.have.property('count')
    })
  })

  it('GET /products/:id deve validar tipos de dados dos campos do produto', () => {
    cy.getAllProducts()
    .then(response => {
      const product = response.body[1]

      expect(product.id).to.be.a('number')
      expect(product.title).to.be.a('string')
      expect(product.price).to.be.a('number')
      expect(product.description).to.be.a('String')
      expect(product.category).to.be.a('string')
      expect(product.image).to.be.a('string')
      expect(product.rating).to.be.an('object')
      
      expect(product.rating.rate).to.be.a('number')
      expect(product.rating.count).to.be.a('number')
    })
  })

  it('GET /products deve retornar status 200 e tempo de resposta < 2000ms', () => {
    cy.getAllProducts()
    .then(response => {
      expect(response.status).to.eq(200)
      expect(response.duration).to.be.lessThan(2000)
    })
  })

})