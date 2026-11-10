VÉRA — Óptica Contemporânea

Uma experiência digital que combina elegância, simplicidade e design contemporâneo.

A VÉRA é uma landing page desenvolvida para representar uma marca fictícia de óptica, apresentando coleções de armações, serviços e uma experiência visual moderna.

O projeto foi desenvolvido com fins de estudo e aprendizagem, permitindo praticar desenvolvimento frontend, organização de componentes, animações e construção de interfaces responsivas.

Demonstração

Acessar aplicação: https://vera-xf1y.onrender.com

Sobre o projeto

A VÉRA procura transmitir uma identidade visual sofisticada através de uma interface minimalista, tipografia elegante, imagens cuidadosamente selecionadas e animações durante a navegação.

A aplicação está organizada em componentes reutilizáveis e secções independentes, facilitando a manutenção e evolução do código.

Funcionalidades

- Landing page para uma marca fictícia de óptica.
- Apresentação institucional da marca.
- Secção de apresentação do atelier.
- Exposição de coleções de armações.
- Apresentação dos serviços disponíveis.
- Secção de testemunho.
- Chamada para ação (CTA).
- Navegação entre secções.
- Animações de entrada e durante a rolagem da página.
- Interface adaptável a diferentes tamanhos de ecrã.

Tecnologias utilizadas

Tecnologia| Finalidade
React 19| Construção da interface
JavaScript (ES Modules)| Lógica da aplicação
Tailwind CSS 4| Estilização
GSAP| Animações
GSAP ScrollTrigger| Animações durante a rolagem
React Icons| Biblioteca de ícones
Vite| Ambiente de desenvolvimento e build
ESLint| Análise estática do código

Estrutura do projeto

vera/
├── public/
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── ui/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Container.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── Atelier.jsx
│   │   ├── Collection.jsx
│   │   ├── Services.jsx
│   │   ├── Quote.jsx
│   │   └── Cta.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js

Como executar o projeto

Para executar o projeto na tua máquina, precisas de ter instalado:

- Node.js (versão compatível com Vite 8).
- npm.
- Git.

1. Clonar o repositório

Abre o terminal e executa:

git clone https://github.com/moisesisaacdev/vera.git

2. Entrar na pasta do projeto

cd vera

3. Instalar as dependências

npm install

Este comando instala todas as dependências necessárias definidas no "package.json".

4. Executar em ambiente de desenvolvimento

npm run dev

Depois de executar o comando, o Vite disponibilizará um endereço local, normalmente:

http://localhost:5173

Abre esse endereço no navegador para visualizar a aplicação.

Outros comandos

Gerar versão de produção

npm run build

Gera os ficheiros otimizados da aplicação na pasta "dist/".

Visualizar a versão de produção

npm run preview

Permite visualizar localmente a versão gerada pelo processo de build.

Verificar qualidade do código

npm run lint

Executa o ESLint para identificar possíveis problemas no código.

Animações

As animações foram implementadas com GSAP.

O projeto utiliza:

- GSAP Timeline para organizar sequências de animação.
- ScrollTrigger para iniciar animações conforme as secções entram no campo de visão.
- Animações de entrada para textos, imagens e elementos da interface.
- IntersectionObserver para acompanhar a secção atualmente visível na navegação.

Objetivos de aprendizagem

Este projeto foi desenvolvido como exercício prático para aprofundar conhecimentos em:

- Desenvolvimento de interfaces com React.
- Componentização e reutilização de código.
- Organização de projetos frontend.
- Estilização com Tailwind CSS.
- Criação de animações com GSAP.
- Manipulação de eventos e observação de elementos com APIs do navegador.
- Desenvolvimento de interfaces responsivas.
- Utilização do Vite no desenvolvimento frontend.
- Processo de build e publicação de aplicações web.

Estado do projeto

Projeto desenvolvido para fins de estudo e prática de desenvolvimento frontend.

Autor

Moisés Isaac

Desenvolvedor Web.

- GitHub: https://github.com/moisesisaacdev

---

Se este projeto te ajudar nos estudos, podes explorar o código-fonte e utilizá-lo como referência para os teus próprios projetos.