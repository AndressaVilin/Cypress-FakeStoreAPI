# 🧪 Cypress - Fake Store API Automation

![CI](https://github.com/AndressaVilin/Cypress-FakeStoreAPI/actions/workflows/ci.yml/badge.svg)

Projeto de automação de testes de API utilizando **Cypress**, com foco em validação de contratos, status code, estrutura de resposta, tipos de dados e cobertura de cenários positivos e negativos.

---

## 📌 O que é a FakeStore API?

A FakeStore API é uma API pública utilizada para fins de estudo e testes, fornecendo endpoints simulados para autenticação e gerenciamento de produtos.

Documentação oficial:  
https://fakestoreapi.com/

---

## 🎯 Objetivo

Automatizar os principais endpoints da FakeStore API, validando:

- Status code
- Estrutura do JSON
- Tipos de dados
- Campos obrigatórios
- Tempo de resposta
- Cenários positivos e negativos
- Inconsistências de documentação

---

## 🚀 Tecnologias Utilizadas 

- Node.js
- Cypress
- JavaScript
- GitHub Actions (CI)

---

## 📂 Estrutura do Projeto
```
.github/
└── workflows/
└── ci.yml

cypress/
├── e2e/
│ ├── login.cy.js
│ └── products.cy.js
│
├── fixtures/
│ ├── loginData.json
│ └── productData.json
│
├── screenshots/
│
└── support/
├── commands.js
└── e2e.js

cypress.config.js
package.json
README.md

```

## ⚙️ Guia de instalação

### Pré-requisitos

- Node.js instalado (versão 16+ recomendada)
- Git instalado

---
### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/AndressaVilin/Cypress-FakeStoreAPI.git 
```

### 2️⃣ Acessar a pasta do projeto
```bash
cd Cypress-FakeStoreAPI
```

### 3️⃣ Instalar dependências
```bash
npm install
```

### 4️⃣ Executar os testes
Modo interativo:
```bash
npx cypress open
```

Modo headless:
```bash
npx cypress run
```

---
## 🔄 Integração Contínua

O projeto possui workflow configurado no GitHub Actions para execução automática dos testes a cada push.

---

## 🧠 Estratégia de Testes

Os testes foram estruturados seguindo boas práticas de automação:

- Separação de dados utilizando fixtures
- Reutilização de código com Custom Commands
- Validação de cenários positivos e negativos
- Validação de contrato (estrutura e tipos de dados)
- Controle de falhas com `failOnStatusCode: false`
- Execução automatizada via CI

A organização foi pensada para permitir escalabilidade e fácil manutenção.

---

## 📋 Casos de Teste Automatizados

### 🔐 Autenticação

- [QFSA-20] Login com credenciais válidas
- [QFSA-21] Login com senha incorreta
- [QFSA-23] Login com corpo vazio

### 📦 Produtos

- Listagem de produtos
- Validação de estrutura do retorno
- Validação de campos obrigatórios

---

## 👩‍💻 Autora

Desenvolvido por **Andressa Évilin**

📎 LinkedIn: <www.linkedin.com/in/andressa-evilin-986427359>
📎 GitHub: <https://github.com/AndressaVilin>
