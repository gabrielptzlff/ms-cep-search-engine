# ms-cep-search-engine

## Instalação

1. Clone o projeto em sua máquina

   ```bash
   git clone git@github.com:gabrielptzlff/ms-cep-search-engine.git
   ```

2. Crie o .env para configurar as variáveis de ambiente

   ```bash
   cp ./.env.homolog ./.env
   ```

3. Faça o build e start dos containers

   ```bash
   make build && make start
   ```

### Ambiente de desenvolvimento

- Para rodar o projeto em ambiente de desenvolvimento execute:

  ```bash
  npm i && npm run dev
  ```

  > O .env DB_HOST pode ser o localhost, já em produção, o nome do container do postgres

- Alguns comandos docker foram simplificados utilizando Make

---

## Documentação dos Endpoints

### Customers

| Método | Endpoint  | Descrição                                      | Body/Query Params |
| ------ | --------- | ---------------------------------------------- | ----------------- |
| GET    | `/viacep` | Lista o endereço completo retornado pela busca | Query: `cep`      |

---

### Postman

- Uma collection do Postman está disponível em [`postman/ms-cep-search-engine.postman_collection.json`](postman/ms-cep-search-engine.postman_collection.json).
- Para usar:
  1. Abra o Postman.
  2. Clique em "Import" e selecione o arquivo da collection.
  3. Ajuste as variáveis de ambiente conforme necessário.
