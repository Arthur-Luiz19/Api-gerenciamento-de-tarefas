
# Gerenciador de Tarefas

## Sobre o Projeto

O **Gerenciador de Tarefas** é um projeto e interface frontend desenvolvidos para fornecer uma maneira eficiente de gerenciar tarefas pessoais. O projeto permite adicionar, editar, remover e listar tarefas, além de marcar tarefas como concluídas ou importantes. facilita o gerenciamento de tarefas de maneira prática e intuitiva, sendo uma excelente solução para organizar o dia a dia de qualquer usuário.

### Funcionalidades principais:
- **Adicionar tarefas**: Permite adicionar novas tarefas à lista.
- **Editar tarefas**: Oferece a possibilidade de alterar o nome de tarefas existentes.
- **Remover tarefas**: Exclui tarefas da lista.
- **Concluir tarefas**: Marca tarefas como concluídas.
- **Marcar tarefas como importantes**: Destaca tarefas importantes para fácil visualização.
- **Filtragem de tarefas**: Permite filtrar as tarefas com base no seu estado (concluídas, não concluídas ou todas).

A aplicação utiliza **React** no frontend e interage com um backend que pode ser configurado para persistir os dados das tarefas (simulado localmente ou com uma API).

## Tecnologias Usadas

- **Frontend**: 
  - **React**: Biblioteca para construção da interface de usuário.
  - **Vite**: Ferramenta de construção rápida para projetos React.
  - **Axios**: Biblioteca para fazer requisições HTTP para o backend.

- **Desenvolvimento**:
  - **ESLint**: Ferramenta para análise estática de código e aplicação de boas práticas.
  - **Vite**: Utilizado para desenvolvimento rápido e construção de pacotes para produção.

## Dependências

### Dependências principais:
- **axios**: `^1.7.9`  
  Biblioteca para realizar requisições HTTP, usada para comunicação com a API.
  
- **react**: `^18.3.1`  
  Biblioteca JavaScript para construir interfaces de usuário.

- **react-dom**: `^18.3.1`  
  Pacote necessário para renderizar componentes React no DOM.

### Dependências de desenvolvimento:
- **@eslint/js**: `^9.15.0`  
  Pacote base do ESLint para JavaScript.

- **@types/react**: `^18.3.12`  
  Tipagens TypeScript para o React.

- **@types/react-dom**: `^18.3.1`  
  Tipagens TypeScript para o React DOM.

- **@vitejs/plugin-react**: `^4.3.4`  
  Plugin oficial para integrar React com o Vite.

- **eslint**: `^9.15.0`  
  Ferramenta para análise de código, aplicando regras e verificando padrões de qualidade.

- **eslint-plugin-react**: `^7.37.2`  
  Plugin do ESLint que fornece regras específicas para React.

- **eslint-plugin-react-hooks**: `^5.0.0`  
  Plugin do ESLint para garantir boas práticas no uso de hooks do React.

- **eslint-plugin-react-refresh**: `^0.4.14`  
  Plugin que melhora a experiência de desenvolvimento com React Fast Refresh.

- **globals**: `^15.12.0`  
  Definição de variáveis globais para evitar erros de escopo.

- **vite**: `^6.0.1`  
  Ferramenta de construção rápida que acelera o desenvolvimento e a geração de pacotes.

## Como Rodar o Projeto

### Pré-requisitos

Certifique-se de ter o **Node.js** instalado. Se não tiver, [faça o download e instale](https://nodejs.org/).

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/SEU_USUARIO/meu-gerenciador-de-tarefas.git

## Scripts

- **`dev`**: Inicia o ambiente de desenvolvimento utilizando o Vite.
  ```bash
  npm run dev

## Instalação

1. Navegue até a pasta do projeto:

    ```bash
    cd meu-gerenciador-de-tarefas
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Execute o ambiente de desenvolvimento:

    ```bash
    npm run dev
    ```

O projeto estará rodando em [http://localhost:3000](http://localhost:3000).

## Contribuindo

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novas funcionalidades. Siga os passos abaixo para contribuir:

1. Fork o repositório.
2. Crie uma nova branch:

    ```bash
    git checkout -b minha-nova-funcionalidade
    ```

3. Faça suas alterações.
4. Commit suas mudanças:

    ```bash
    git commit -m 'Adiciona nova funcionalidade'
    ```

5. Push para a branch:

    ```bash
    git push origin minha-nova-funcionalidade
    ```

6. Abra um Pull Request explicando as alterações feitas.

## Licença

Este projeto está licenciado sob a MIT License - consulte o arquivo [LICENSE](LICENSE) para mais detalhes.


