# Projeto Todo List com Spring Boot e React com TypeScript

Este é um projeto de uma aplicação Todo List desenvolvida utilizando Spring Boot no backend e React com TypeScript no frontend. A aplicação permite ao usuário criar, visualizar, atualizar e excluir tarefas de uma lista.

![image](https://github.com/marcosChalet/todolist-java-react/assets/72557256/71a96513-bfc1-4ee2-a08c-1169177c726b)

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

- Java Development Kit (JDK) 17 ou superior
- Node.js e npm (Node Package Manager v18.x)
- docker e docker compose
- Git

## Recomendação de Ambiente

Fica de recomendação esse ambiente para o desenvolvimento:

- IntelliJ IDEA (Backend)
- Postman
- Visual Studio Code (Front-end)

## Configuração

Siga as etapas abaixo para configurar o projeto em sua máquina local:

1. Clone o repositório do projeto do GitHub:
```
git clone https://github.com/marcosChalet/todolist-java-react todo-list
```

2. Compile e execute o backend utilizando o Docker:
```
cd todo-list/backend
mvn clean install -DskipTests
cd .. && docker compose up --build
```

3. Inicie o frontend:
```
cd frontend
npm install
npm run dev
```

Após seguir essas etapas, o backend estará sendo executado na porta 8080 e o frontend será acessível na porta 5173. Você poderá acessar a aplicação no seu navegador através do endereço [http://localhost:5173](http://localhost:5173).

## Uso

Ao acessar a aplicação, você poderá visualizar a lista de tarefas existentes, adicionar novas tarefas e excluí-las.

## Estrutura do Projeto

O projeto está dividido em duas partes principais: o backend e o frontend.

### Backend

O backend foi desenvolvido utilizando o framework Spring Boot e implementa uma API RESTful para manipulação das tarefas. O código fonte do backend está localizado no diretório `backend`.

A estrutura de pacotes do backend segue a convenção do Spring Boot:

- `com.mchalet.todoapp`: pacote raiz do projeto
- `com.mchalet.todoapp.controller`: contém os controladores REST para a API
- `com.mchalet.todoapp.model`: define os modelos de dados da aplicação
- `com.mchalet.todoapp.repository`: implementa as operações de acesso aos dados
- `com.mchalet.todoapp.service`: contém as classes de serviço para manipulação das tarefas

### Frontend

O frontend foi desenvolvido utilizando React com TypeScript e faz chamadas para a API RESTful fornecida pelo backend. O código fonte do frontend está localizado no diretório `frontend`.

A estrutura do projeto frontend é a seguinte:

- `src`: diretório raiz do código fonte
- `src/core`: contém as interfaces/types/classes para utilização em todo projeto
- `src/components`: contém os componentes reutilizáveis da aplicação
- `src/hooks`: contém os serviços/lógica responsáveis por realizar as chamadas à API
- `src/App.tsx`: contém a página inicial da aplicação

## Contribuição

Se desejar contribuir para este projeto, você pode seguir as etapas abaixo:

1. Faça um fork do repositório
2. Crie uma nova branch para sua contribuição
3. Realize as alterações e commit
4. Faça um push da sua branch para o repositório forkado
5. Abra um Pull Request para o repositório original

Será um prazer receber suas contribuições!
