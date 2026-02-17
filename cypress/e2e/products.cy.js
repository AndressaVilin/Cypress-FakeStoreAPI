import productData from "../fixtures/productData.json";

describe("FakeStore API - Products", () => {
  describe("GET /products", () => {
    it("[QFSA-5] deve retornar status 200", () => {
      cy.getAllProducts().then((response) => {
        expect(response.status).to.equal(200);
      });
    });

    it("[QFSA-6] deve retornar um array de produtos", () => {
      cy.getAllProducts().then((response) => {
        expect(response.body).to.be.an("array");
        expect(response.body[1]).to.be.an("object");
      });
    });

    it("[QFSA-7] /products/:id - deve retornar todos os campos obrigatórios", () => {
      cy.getProductById(1).then((response) => {
        expect(response.status).to.eq(200);

        const product = response.body;

        expect(product).to.have.property("id");
        expect(product).to.have.property("title");
        expect(product).to.have.property("price");
        expect(product).to.have.property("description");
        expect(product).to.have.property("category");
        expect(product).to.have.property("image");
        expect(product).to.have.property("rating");
        expect(product.rating).to.have.property("rate");
        expect(product.rating).to.have.property("count");
      });
    });

    it("[QFSA-8] /products/:id - deve validar tipos de dados dos campos", () => {
      cy.getProductById(1).then((response) => {
        const product = response.body;

        expect(product.id).to.be.a("number");
        expect(product.title).to.be.a("string");
        expect(product.price).to.be.a("number");
        expect(product.description).to.be.a("string");
        expect(product.category).to.be.a("string");
        expect(product.image).to.be.a("string");
        expect(product.rating).to.be.an("object");

        expect(product.rating.rate).to.be.a("number");
        expect(product.rating.count).to.be.a("number");
      });
    });

    it("[QFSA-10] deve retornar status 200 e tempo de resposta < 2000ms", () => {
      const start = Date.now()
      cy.getAllProducts().then((response) => {
        const duration = Date.now() - start;
        expect(response.status).to.eq(200);
        expect(duration).to.be.lessThan(2000);
      });
    });

    it("[QFSA-18] GET /products/:id - deve retornar produto com ID válido", () => {
      cy.getProductById(1).then((response) => {
        expect(response.status).be.eq(200);
        expect(response.body.id).to.equal(1);
        expect(response.body).to.be.an("object");
      });
    });

    it("[QFSA-19] GET /products/:id - deve retornar corpo vazio para ID inexistente (limitação da API)", () => {
      cy.getProductById(9999).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.empty;
      });
    });
  });

  describe("POST /products", () => {
    it("[QFSA-25] deve criar produto válido", () => {
      const novoProduto = productData.ValidProduct;
      cy.addNewProduct(novoProduto).then((response) => {
        expect(response.status).to.eq(201);

        expect(response.body).to.be.an("object");

        expect(response.body).to.have.property("id");
        expect(response.body).to.have.property("title");
        expect(response.body).to.have.property("price");
        expect(response.body).to.have.property("category");
        expect(response.body).to.have.property("image");

        expect(response.body.title).to.eq(novoProduto.title);
        expect(response.body.price).to.eq(novoProduto.price);
        expect(response.body.description).to.eq(novoProduto.description);
      });
    });

    it("[QFSA-26] deve permitir criação sem campos obrigatórios (limitação da API)", () => {
      const novoProduto = productData.InvalidProduct;

      cy.addNewProduct(novoProduto).then((response) => {
        expect(response.status).to.eq(201);
      });
    });
  });
});
