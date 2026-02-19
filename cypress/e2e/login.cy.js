import loginData from "../fixtures/loginData.json";

describe("FakeStore API - Auth Login", () => {

  describe("Cenário positivos", () => {
    it("[QFSA-20] POST /auth/login - credenciais válidas - deve retornar 201 e token válido", () => {
      cy.login(loginData.validUser).then((response) => {
        expect(response.status).to.eq(201);

        expect(response.body).to.have.property("token");
        expect(response.body.token).to.not.be.empty;
        expect(response.body.token).to.be.a("string");
      });
    });
  });

  describe("Cenários negativos", () => {
    it("[QFSA-21] POST /auth/login - senha incorreta - deve retornar 401", () => {
      cy.login(loginData.invalidPassword).then((response) => {
        expect(response.status).to.eq(401);
      });
    });

    it("[QFSA-23] POST /auth/login - corpo de requisição vazio - deve retornar 400", () => {
      cy.login(loginData.emptyBody).then((response) => {
        expect(response.status).to.eq(400);
      });
    });
  });
});
