# web_project_around_react

Projeto desenvolvido como parte do curso TripleTen, utilizando React para criar uma aplicação de galeria de cards interativa.

## Funcionalidades
- Visualização de cards com imagens e títulos
- Adição de novos cards
- Edição de perfil e avatar do usuário
- Exclusão de cards com confirmação via popup
- Visualização de imagem ampliada em popup
- Interface responsiva

## Tecnologias Utilizadas
- React
- JavaScript (ES6+)
- CSS Modules
- Vite

## Estrutura do Projeto
```
├── public/
├── src/
│   ├── assets/
│   ├── blocks/         # Arquivos CSS
│   ├── components/     # Componentes React
│   │   ├── App.jsx
│   │   ├── Header/
│   │   ├── Footer/
│   │   └── Main/
│   │       ├── Main.jsx
│   │       └── components/
│   │           ├── Card/
│   │           └── Popup/
│   │               └── components/
│   │                   ├── DeleteCard/
│   │                   ├── EditAvatar/
│   │                   ├── EditProfile/
│   │                   ├── ImagePopup/
│   │                   └── NewCard/
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Como rodar o projeto

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Acesse `http://localhost:3000` no navegador.

## Scripts Disponíveis
- `npm run dev` — inicia o servidor de desenvolvimento
- `npm run build` — gera a versão de produção
- `npm run preview` — faz o preview da build de produção

## Créditos
- Imagens e layout baseados no projeto do curso TripleTen.

---
Desenvolvido por [Seu Nome].
