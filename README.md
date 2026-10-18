# Sisyphus Academy

Painel web para organizar informações de uma academia. A aplicação permite consultar e cadastrar alunos e máquinas, além de remover registros. A interface usa a metáfora de Sísifo para representar a disciplina e a constância nos treinos.

## Funcionalidades

- Página inicial com informações e resumo de alunos e máquinas.
- Listagem e cadastro de alunos.
- Listagem, cadastro e remoção de máquinas.
- Remoção de alunos.
- Página “Sobre” com a filosofia e os valores da academia.
- Persistência local dos dados por meio de uma API simulada com JSON Server.

## Tecnologias

- React 19
- Vite 8
- React Router
- JSON Server
- React Toastify

## Requisitos

- Node.js e npm.

## Como executar

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Inicie a API em um terminal:

   ```bash
   npx json-server db.json --port 3000
   ```

   A API ficará disponível em `http://localhost:3000`. Os registros são armazenados no arquivo `db.json`.

3. Em outro terminal, inicie a aplicação:

   ```bash
   npm run dev
   ```

4. Acesse o endereço informado pelo Vite no terminal (normalmente `http://localhost:5173`).

> A API deve estar em execução na porta `3000` para carregar, cadastrar e remover alunos ou máquinas.

## Rotas da aplicação

| Caminho | Página |
| --- | --- |
| `/` | Início |
| `/sobre` | Sobre a academia |
| `/cadastro` | Opções de cadastro |
| `/cadastro/aluno` | Cadastro de aluno |
| `/cadastro/maquina` | Cadastro de máquina |
| `/alunos` | Lista de alunos |
| `/maquinas` | Lista de máquinas |

## API local

O JSON Server expõe os seguintes recursos:

| Método | Caminho | Descrição |
| --- | --- | --- |
| `GET` | `/alunos` | Lista os alunos |
| `POST` | `/alunos` | Cadastra um aluno |
| `DELETE` | `/alunos/:id` | Remove um aluno |
| `GET` | `/maquinas` | Lista as máquinas |
| `POST` | `/maquinas` | Cadastra uma máquina |
| `DELETE` | `/maquinas/:id` | Remove uma máquina |

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção em `dist/` |
| `npm run preview` | Serve localmente a versão de produção |
| `npm run lint` | Executa o ESLint |

## Estrutura do projeto

```text
src/
├── components/   # Componentes reutilizáveis, como cabeçalho, navegação e cards
├── pages/        # Páginas da aplicação
├── assets/       # Imagens e outros recursos
├── App.jsx       # Composição principal
└── Router.jsx    # Rotas da aplicação
db.json           # Dados locais usados pelo JSON Server
```
