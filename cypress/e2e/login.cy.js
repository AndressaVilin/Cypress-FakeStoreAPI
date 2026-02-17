import loginData from "../fixtures/loginData.json";

describe("FakeStore API - Auth Login", () => {
  const endpoint = "/auth/login";

  describe("Cenário positivos", () => {
    it("[QFSA-20] POST /auth/login - credenciais válidas - deve retornar 201 e token válido", () => {
      cy.request({
        method: "POST",
        url: endpoint,
        body: loginData.validUser,
      }).then((response) => {
        expect(response.status).to.eq(201);

        expect(response.body).to.have.property("token");
        expect(response.body.token).to.not.be.empty;
        expect(response.body.token).to.be.a("string");
      });
    });
  });

  describe("Cenários negativos", () => {
    it("[QFSA-21] POST /auth/login - senha incorreta - deve retornar 401", () => {
      cy.request({
        method: "POST",
        url: endpoint,
        body: loginData.invalidPassword,
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(401);
      });
    });

    it("[QFSA-23] POST /auth/login - corpo de requisição vazio - deve retornar 400", () => {
      cy.request({
        method: "POST",
        url: endpoint,
        body: loginData.emptyBody,
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(400);
      });
    });
  });
});
