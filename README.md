Documentação do Projeto: Know Your Fan
1. Descrição Geral
O projeto 'Know Your Fan' é uma aplicação desenvolvida para o desafio 'Know Your Fan' da FURIA. O objetivo principal da aplicação é permitir que fãs se conectem com jogadores e criadores de conteúdo da organização por meio da API do Twitter. Através de uma interface simples, os usuários podem visualizar interações e métricas relacionadas a perfis da FURIA.
2. Tecnologias Utilizadas
- Node.js
- Express
- Twitter API v2
- Axios
- dotenv
3. Funcionalidades
- Autenticação e integração com a API do Twitter;
- Consulta de dados públicos como menções, seguidores e tweets;
- Exibição de informações relevantes para promover a interação entre fãs e membros da FURIA;
- Backend configurado para rodar na porta 3001.
4. Arquitetura da Aplicação
A aplicação é composta por um backend construído com Node.js e Express, responsável por realizar requisições autenticadas à API do Twitter. Os dados recebidos são tratados e enviados para o frontend, que pode ser desenvolvido separadamente para exibir as informações em tempo real.
5. Instruções para Execução
1. Clone o repositório do projeto;
2. Instale as dependências utilizando o comando `npm install`;
3. Execute o servidor backend com o comando `node index.js`, e o frontend com o comando `npm run dev`;
4. A aplicação estará disponível localmente na porta localhost:5173.
6. Considerações Finais
Este projeto foi desenvolvido com foco na experiência do usuário e na utilização eficiente dos recursos disponibilizados pela Twitter API v2. Cumpre os requisitos do desafio proposto pela FURIA e pode ser expandido com novas funcionalidades para maior engajamento da comunidade.
