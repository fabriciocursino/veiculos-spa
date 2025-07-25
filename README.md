# Veículos SPA

Este projeto é um frontend em React para gerenciamento de veículos, desenvolvido como parte de um teste técnico. Ele consome uma API REST para listar, criar, editar, excluir e visualizar detalhes de veículos, além de exibir estatísticas.

## Tecnologias Utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/)
- [React Router DOM](https://reactrouter.com/)

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 20 ou superior recomendada)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- Backend da API rodando em `http://localhost:8080`

## Passo a Passo de Configuração

1. **Clone o repositório:**

   ```sh
   git clone https://github.com/fabriciocursino/veiculos-spa.git
   cd veiculos-spa

2. **Instale as dependências:**
   ```sh
   npm install
    # ou
    yarn
1. **Execute o projeto em modo de desenvolvimento:**

   ```sh
   npm run dev
    # ou
    yarn dev

## Funcionalidades

- Listagem, busca e filtro de veículos
- Cadastro de novo veículo
- Edição e exclusão de veículos
- Visualização de detalhes de cada veículo
- Exibição de estatísticas:
  - Veículos não vendidos
  - Veículos cadastrados por década
  - Veículos por marca
  - Veículos cadastrados na última semana

## Observações

- Certifique-se de que o backend esteja rodando antes de iniciar o frontend.
- Para dúvidas sobre a API, consulte a documentação do backend fornecida no teste técnico.
