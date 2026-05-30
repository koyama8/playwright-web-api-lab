# Playwright Web API Lab

Repositorio de estudos praticos em QA Automation, reunindo automacao web, testes de API, banco de dados PostgreSQL, Docker, PgAdmin e execucao local com Playwright.

## Visao Geral

| Pasta | Objetivo | Stack principal | Status |
| --- | --- | --- | --- |
| `apps/zombieplus/api/` | API REST base do ZombiePlus | Node.js, Express, Sequelize, PostgreSQL | API local |
| `apps/zombieplus/web/` | Aplicacao web do ZombiePlus | React build, Serve | Web local |
| `apps/zombieplus/docker-compose.yml` | Banco local e PgAdmin | Docker, PostgreSQL, PgAdmin | Infra local |
| `tests/` | Testes automatizados com Playwright | Playwright, JavaScript | Suite inicial |

## Estrutura

```text
web-lab-QAKoyama/
|-- apps/
|   |-- zombieplus/
|   |   |-- api/                 # API Node.js + Sequelize
|   |   |-- web/                 # Webapp ZombiePlus em build React
|   |   |-- docker-compose.yml   # PostgreSQL e PgAdmin
|-- tests/                       # Testes Playwright
|-- playwright.config.js         # Configuracao do Playwright
|-- package.json                 # Dependencias do laboratorio
|-- package-lock.json
|-- README.md
```

## Como Rodar

### Banco com Docker

```bash
cd apps/zombieplus
docker-compose up -d
```

Acessos:

```text
PostgreSQL local: localhost:5433
PgAdmin:          http://localhost:16543
```

Credenciais do PgAdmin:

```text
Email: admin@qax.com
Senha: pwd123
```

Dados para registrar o servidor Postgres dentro do PgAdmin:

```text
Host:     pgdb
Porta:    5432
Database: postgres
Usuario:  postgres
Senha:    pwd123
```

### API ZombiePlus

Crie/configure o arquivo `apps/zombieplus/api/.env` localmente. Este arquivo nao deve ir para o GitHub.

Exemplo usando o banco Docker local:

```env
APP_URL=http://localhost
PORT=3333
FRONT_URL=http://localhost:3000
NODE_ENV=development
APP_NAME=zombieplus-api

DB_DIALECT=postgres
DB_HOST=localhost
DB_NAME=postgres
DB_USER=postgres
DB_PASS=pwd123
DB_PORT=5433
DB_SSL=false
```

Comandos:

```bash
cd apps/zombieplus/api
npm install
npx sequelize db:migrate
npx sequelize db:seed:all
npm run dev
```

Acesso:

```text
API: http://localhost:3333
```

Usuario admin criado pelo seed:

```text
Email: admin@zombieplus.com
Senha: pwd123
```

### Web ZombiePlus

```bash
cd apps/zombieplus/web
npm install
npm run dev
```

Acesso:

```text
Web:   http://localhost:3000
Login: http://localhost:3000/admin/login
```

## Playwright

Instale as dependencias do laboratorio na raiz do projeto:

```bash
npm install
npx playwright install
```

Executar testes:

```bash
npx playwright test
```

Abrir relatorio HTML:

```bash
npx playwright show-report
```

## API ZombiePlus - Endpoints

| Metodo | Rota | Objetivo | Autenticacao |
| --- | --- | --- | --- |
| `GET` | `/` | Health check da API | Publica |
| `GET` | `/catalog` | Listar conteudos em destaque | Publica |
| `POST` | `/sessions` | Login de usuario admin | Publica |
| `POST` | `/leads` | Cadastrar lead pela landing page | Publica |
| `GET` | `/companies` | Listar distribuidoras | Bearer token |
| `GET` | `/movies` | Listar filmes | Bearer token |
| `POST` | `/movies` | Cadastrar filme | Bearer token |
| `GET` | `/movies/:id` | Buscar filme por ID | Bearer token |
| `DELETE` | `/movies/:id` | Remover filme | Bearer token |
| `GET` | `/tvshows` | Listar series | Bearer token |
| `POST` | `/tvshows` | Cadastrar serie | Bearer token |
| `GET` | `/tvshows/:id` | Buscar serie por ID | Bearer token |
| `DELETE` | `/tvshows/:id` | Remover serie | Bearer token |
| `GET` | `/leads` | Listar leads | Bearer token |
| `GET` | `/leads/:id` | Buscar lead por ID | Bearer token |
| `DELETE` | `/leads/:id` | Remover lead | Bearer token |

## Observacoes

- O arquivo `apps/zombieplus/api/.env` esta ignorado pelo Git para evitar vazamento de credenciais.
- A pasta `apps/zombieplus/web/build` deve permanecer versionada, pois a web disponivel neste projeto esta em formato de build.
- As pastas `node_modules`, `test-results`, `playwright-report` e arquivos temporarios nao devem ser enviados ao GitHub.
- O script `apps/zombieplus/api/db.sh` reseta o banco antes de recriar as tabelas. Use com cuidado.

## Status

Projeto em evolucao. A base atual contem aplicacao web, API Node.js, banco PostgreSQL via Docker/PgAdmin e configuracao inicial do Playwright para estudos de automacao web e API.
