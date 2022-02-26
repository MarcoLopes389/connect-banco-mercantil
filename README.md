# Usando a API:

## Instalando depencências e executando o projeto:

Primeiro é necessário instalar as dependêcias com `yarn` ou `npm`. Na raiz do projeto execute:
`npm install` or `yarn install`
Adicione suas credenciais de banco de dados no arquivo /src/shared/infra/sequelize/database/config.json

Logo depois execute no terminal: `yarn dev` para executar em modo desenvolvimento.
Abra sua API request preferida, seja Insomnia ou Postman e acesse http://localhost:3004/simulation/antecipation via post e envie o objeto no body com os seguinte campos: cpf, cep, name, birthday, bank e phone

Caso queira acessar os dados da sua simulação acesse http://localhost:3004/dashboard/findStatistics
