<h1 align="center">🪐🎭 Playwright Web API Lab</h1>

Laboratório de QA Automation com Playwright, focado em testes web E2E, validações de API, integração com PostgreSQL, Docker e organização de cenários automatizados.

## Visão Geral

| Pasta | Objetivo | Stack principal | Status |
| --- | --- | --- | --- |
| `apps/zombieplus/api/` | API REST base do projeto | Node.js, Express, Sequelize, PostgreSQL | API local |
| `apps/zombieplus/web/` | Aplicação web do projeto | React build, Serve | Web local |
| `apps/zombieplus/docker-compose.yml` | Banco local e PgAdmin | Docker, PostgreSQL, PgAdmin | Infra local |
| `tests/` | Testes automatizados com Playwright | Playwright, JavaScript | Suite inicial |

## 📁 Estrutura

```text
web-lab-QAKoyama/
|-- apps/
|   `-- zombieplus/
|       |-- api/                 # API do projeto
|       |-- web/                 # Aplicacao web
|       `-- docker-compose.yml   # PostgreSQL e PgAdmin
|-- tests/                       # Testes automatizados com Playwright
|-- playwright.config.js         # Configuracao do Playwright
|-- package.json                 # Dependencias e scripts do laboratorio
|-- package-lock.json
|-- .gitignore
`-- README.md
```
