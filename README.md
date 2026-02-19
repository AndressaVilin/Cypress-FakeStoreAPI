# 🧪 Cypress - Fake Store API Automation

![CI](https://github.com/AndressaVilin/Cypress-FakeStoreAPI/actions/workflows/ci.yml/badge.svg)

Projeto de automação de testes de API utilizando **Cypress**, com foco na validação de contratos, status code, estrutura de resposta e cenários positivos e negativos.

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


## 🔄 Integração Contínua

O projeto possui workflow configurado no GitHub Actions para execução automática dos testes a cada push.

