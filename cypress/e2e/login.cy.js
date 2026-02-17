describe('FakeStore API - Auth Login', () => {

    it('[QFSA-20] POST /auth/login - credenciais válidas - deve retornar 201 e token válido', () => {
        const user = {
            username: "kevinryan",
            password: "kev02937@"
        }

        cy.request({
            method: 'POST',
            url: '/auth/login',
            body: user
        }).then(response => {
           expect(response.status).to.eq(201);

           expect(response.body).to.have.property('token');
           expect(response.body.token).to.not.be.empty;
           expect(response.body.token).to.be.a('string');

        })
    }) 

    it('[QFSA-21] POST /auth/login - senha incorreta - deve retornar 401', () => {
        const user = {
            username: "kevinryan",
            password: "senhaErrada"
        }

        cy.request({
            method: 'POST',
            url: '/auth/login',
            body: user,
            failOnStatusCode: false
        }).then(response => {
           expect(response.status).to.eq(401);
        })
    }) 


    it('[QFSA-23] POST /auth/login - corpo de requisição vazio - deve retornar 400', () => {
        const user = {
            username: "",
            password: ""
        }

        cy.request({
            method: 'POST',
            url: '/auth/login',
            body: user,
            failOnStatusCode: false
        }).then(response => {
           expect(response.status).to.eq(400);
        })
    }) 
})