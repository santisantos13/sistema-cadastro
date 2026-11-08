# NexPlay - Home, Login e Cadastro

Projeto de estudo com HTML, CSS e um pouco de JavaScript: página inicial, login e cadastro da loja fictícia **NexPlay** (games, consoles e notebooks gamer).

> Projeto em desenvolvimento. É apenas front-end: os formulários não enviam dados para nenhum servidor.

**Demo:** [Ver o site no ar](https://santisantos13.github.io/sistema-cadastro/)

## Páginas

- `index.html`: página inicial com banner da Black Friday e destaques
- `login.html`: tela de entrada (e-mail e senha)
- `cadastro.html`: tela de cadastro (nome, telefone, e-mail e senha)
- `style.css`: estilos compartilhados pelas páginas
- `script.js`: validação do formulário de cadastro

## JavaScript

O `script.js` valida o cadastro antes de "enviar":

- Compara os campos **Senha** e **Confirmar senha**
- Se forem diferentes, mostra a mensagem de erro em vermelho e leva o cursor para o campo de confirmação
- Se forem iguais, mostra a mensagem de sucesso em verde e limpa o formulário
- Usa `preventDefault()` para a página não recarregar ao enviar

Além disso, a validação nativa do HTML cuida de campos obrigatórios (`required`), formato de e-mail (`type="email"`) e tamanho mínimo da senha (`minlength="6"`).

## O que pratiquei

- Estrutura semântica com `header`, `main`, `section` e `footer`
- Formulários com `label`, `input` e validação nativa
- Variáveis CSS (`:root`) para a paleta de cores
- Layout com Flexbox, imagem com `aspect-ratio` e `object-fit`
- Layout responsivo com `@media` para celular
- Transições (`hover`, `focus`) e animação com `@keyframes`
- JavaScript básico: `getElementById`, `addEventListener` e `preventDefault`
- Publicação com GitHub Pages

## Como ver o projeto

1. Acesse a [demo no GitHub Pages](https://santisantos13.github.io/sistema-cadastro/), ou
2. Baixe ou clone este repositório e abra o arquivo `index.html` no navegador

## Próximos passos

- [ ] Fazer o login funcionar com `localStorage`
- [ ] Melhorar a página inicial com produtos e preços
- [ ] Adicionar as páginas de produtos e contato
- [ ] Conectar a um back-end

## Autor

Santhiago ([@santisantos13](https://github.com/santisantos13))
