
# Nest Clean 🚀

Este repositório contém a implementação de uma aplicação backend de fórum de perguntas e respostas, utilizando os conceitos de **Domain-Driven Design (DDD)** e **Clean Architecture**. O objetivo é criar um código modular, escalável e fácil de manter, seguindo as melhores práticas de design de software.

## Arquitetura ⚙

O projeto segue a estrutura proposta por Clean Architecture, onde a aplicação é dividida em camadas bem definidas, cada uma com responsabilidades específicas:

-   **Domain**: Contém as regras de negócio, entidades e interfaces que definem os contratos entre as camadas.
-   **Application**: Implementa os casos de uso, que orquestram as interações entre as entidades do domínio e as camadas externas.
-   **Infrastructure**: Responsável pela comunicação com serviços externos, como bancos de dados, APIs e outros sistemas.
-   **Presentation**: Contém os controladores e adaptadores que recebem as requisições dos usuários e enviam as respostas.

## Tecnologias Utilizadas 🛠

As principais tecnologias e bibliotecas utilizadas neste projeto são:

-   **[NestJS](https://nestjs.com/)**: Framework Node.js progressivo para a construção de aplicações server-side eficientes e escaláveis.
-   **[Prisma](https://www.prisma.io/)**: ORM moderno e flexível, utilizado para interagir com o banco de dados de forma eficiente.
-   **[AWS SDK - S3](https://aws.amazon.com/sdk-for-javascript/)**: Integração com o serviço de armazenamento S3 da AWS, utilizada para gerenciar uploads de arquivos.
-   **[JWT](https://jwt.io/)**: Utilizado para autenticação segura via JSON Web Tokens.
-   **[Passport](http://www.passportjs.org/)**: Middleware de autenticação para Node.js, integrando com estratégias de autenticação como JWT.
-   **[BcryptJS](https://github.com/dcodeIO/bcrypt.js/)**: Biblioteca para hashing de senhas, garantindo a segurança dos dados de autenticação.
-   **[RxJS](https://rxjs.dev/)**: Biblioteca para programação reativa, utilizada para manipulação de streams assíncronas.
-   **[Zod](https://zod.dev/)**: Biblioteca para validação e parseamento de esquemas de dados.
-   **[ioredis](https://github.com/luin/ioredis)**: Cliente Redis robusto para Node.js, utilizado para caching e otimização de performance.

## Como Rodar o Projeto ✅

1.  **Clone o repositório:**
    
    bash
    
    Copiar código
    
    `git clone https://github.com/RafaelFigueiredo2203/nest-clean.git` 
    
2.  **Instale as dependências:**
    
    bash
    
    Copiar código
    
    `npm install` 
    
3.  **Configure o ambiente:**
    
    Crie um arquivo `.env` na raiz do projeto e adicione as variáveis de ambiente necessárias, como as informações de conexão com o banco de dados.
    
4.  **Execute as migrações do banco de dados:**
    
    bash
    
    Copiar código
    
    `npx prisma migrate dev` 
    
5.  **Inicie o servidor:**
    
    bash
    
    Copiar código
    
    `npm run start:dev` 
    
    O servidor estará disponível em `http://localhost:3000`.
    

## Testes🧪

Para rodar os testes, use o comando:

bash

Copiar código

`npm run test`
