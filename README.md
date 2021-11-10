<h1 align="center"> Menina de Vila - Banco Safra </h1>

<div align="center" style="display: flex" >
  <img alt="logo" height="200" width="150" src="./src/assets/logo-g-menina-de-vila.png">
  <img alt="logo" height="200" width="150" src="./src/assets/logo-safra.png">
</div>

<h2 align="center"> Projeto Final desenvolvido no hackathon do Talent Fest durante o bootcamp de Front-End da SAP006 Laboratoria :yellow_heart: </h2>

## Índice

1. [Definição do Produto](#dart-definição-do-produto)
2. [Histórias de Usuários](#pencil2-histórias-de-usuários)
3. [Protótipos](#art-protótipos)
4. [Como Utilizar](#gear-como-utilizar)
5. [Testes de Usabilidade](#busts_in_silhouette-testes-de-usabilidade)
6. [Tecnologias Utilizadas](#robot-tecnologias-utilizadas)
7. [Estrutura dos Principais Arquivos](#file_folder-estrutura-dos-principais-arquivos)
8. [Performance, Progressive Web App, Accessibility e Best Practices do Lighthouse](#bar_chart-performance-progressive-web-app-accessibility-e-best-practices-do-lighthouse)
9. [Resultados](#%EF%B8%8F-resultados)
10. [Sobre as desenvolvedoras](#woman_technologist-sobre-as-desenvolvedoras)

---
## :dart: Definição do Produto

Olá! Somos o [Divino Burger](https://divino-burger.vercel.app/), um fast food 24hrs. A nossa proposta de serviço 24 horas foi muito bem recebida e, para continuar a crescer, precisamos de um sistema que nos ajude a receber pedidos de nossos clientes.

Nós temos 2 menus. Um muito simples para o café da manhã:

| Item                           | Preço R$ |
| ------------------------------ | -------- |
| Café americano                 | 5        |
| Café com leite                 | 7        |
| Sanduíche de presunto e queijo | 10       |
| Suco de fruta natural          | 7        |

E outro menu para o resto do dia:

| Item                     | Preço  |
| ------------------------ | ------ |
| **Hambúrgueres**         | **R$** |
| Hambúrguer simples       | 10     |
| Hambúrguer duplo         | 15     |
| **Acompanhamentos**      | **R$** |
| Batata frita             | 5      |
| Anéis de cebola          | 5      |
| **Bebidas**              | **R$** |
| Água 500ml               | 5      |
| Água 750ml               | 7      |
| Bebida gaseificada 500ml | 7      |
| Bebida gaseificada 750ml | 10     |

**Importante:** Os clientes podem escolher entre hambúrgueres de carne bovina,
frango ou vegetariano. Além disso, por um adicional de R\$ 1,00 , eles podem
adicionar queijo **ou** ovo.

Nossos clientes são bastante indecisos, por isso é muito comum que eles mudem o
seu pedido várias vezes antes de finalizar.

A interface deve mostrar os dois menus (café da manhã e restante do dia), cada
um com todos os seus _produtos_. O usuário deve poder escolher que _produtos_
adicionar e a interface deve mostrar o _resumo do pedido_ com o custo total.

Os pedidos serão enviados por meio de um _tablet_, mas não queremos um aplicativo nativo, mas sim um aplicativo Web que seja mobile-first.

Além disso a cliente nos deu um [link da documentação](https://lab-api-bq.herokuapp.com/api-docs/)
que especifica o comportamento esperado da API que iremos expor por HTTP.
Lá podemos encontrar todos os detalhes dos _endpoints_, como por exemplo
que parâmetros esperam, o que devem responder, etc.

O objetivo principal é aprender a construir uma _interface web_ usando o
_framework_ escolhido (React). Esse framework front-end ataca
o seguinte problema: **como manter a interface e estado sincronizados**.
Portanto, esta experiência espera familiarizá-la com o conceito de _estado da
tela_, e como cada mudança no estado vai refletir na interface (por exemplo,
toda vez que adicionamos um _produto_ para um _pedido_, a interface deve
atualizar a lista de pedidos e o total).

---

<div align="center" style="display: flex">
  <img alt="logo" height="200" width="200" src="./src/img/logo.png">
</div>

<div align='center'>
 
  <h4> Você pode acessar a aplicação utilizando um dos logins de teste abaixo:</h4>


| #                     	|             Salão            	|           Cozinha           	|
|:-----------------------:|:----------------------------:	|:---------------------------:	|
| 🆔	| salao@divinoburger.com.br 	| cozinha@divinoburger.com.br 	|
| :key:                 	|            123456            	|            123456           	|

</div>

---
## :pencil2: Histórias de Usuários
![img](./src/img/historias-usuarios.png)

---
## :art: Protótipos 

### Paleta de Cores 
![img](./src/img/paleta-cores.png)

---

<div align="center" style="display: flex">
  <img alt="prototipo-login" height="580" width="410" src="./src/img/prototipo-login2.png">
  <img alt="prototipo-salao" height="580" width="410" src="./src/img/prototipo-salao3.png"><br><br>
  
  <img alt="prototipo-salao" height="600" width="750" src="./src/img/prototipo-salao.png">
</div>

---
## :gear: Como Utilizar

- A tela inicial da aplicação traz a **Página de Login** que apresenta ao usário as opções de fazer o login com email e senha já cadastrados e entrar na plataforma do Divino Burger ou prosseguir para a Página de Cadastro;
- Na **Página de Cadastro**, o funcionário pode cadastrar-se inserindo seus dados de Nome, E-mail, Senha e Setor de Trabalho;
- Ao realizar qualquer uma dessas formas de acesso, o usuário será encaminhado para o seu respectivo ambiente:
    1. **Salão**: para os garçons/garçonetes, onde ocorrerá a anotação e encaminhamento dos pedidos para a cozinha;
    2. **Cozinha**: para os cozinheiros que receberão a demanda dos pedidos realizados.

---
## :busts_in_silhouette: Testes de Usabilidade
Durante o desenvolvimento do projeto, foram realizados testes de usabilidade com diferentes indivíduos no intuito de analisar a experiência do usuário com a interface da aplicação. Com base nos resultados desses testes, foram implementadas as seguintes soluções:

- Tempo de preparação exibido somente na área de pedidos entregues;
- Relógio digital;
- Responsividade para tablet em formato retrato, adaptando a exibição do carrinho na página de Salão;
- Histórico com filtragem de pedidos do dia atual;
- Atualização automática dos pedidos;

---
## :robot: Tecnologias Utilizadas

| Ferramenta | Descrição |
| --- | --- |
| `React` | Uma biblioteca JavaScript para criar interfaces de usuário |
| `HTML 5` | Linguagem de marcação |
| `SCSS/SASS` | Linguagem de estilização |
| `JavaScript` |  Linguagem de programação interpretada estruturada |
| `Jest` | Framework de teste em JavaScript |
| `Node.js` | Software de execução de códigos JavaScript |
| `Git e GitHub` | Sistemas de controle de versões distribuídos |
| `Figma` | Editor gráfico de vetor e prototipagem de projetos |

---

## :file_folder: Estrutura dos Principais Arquivos
```
.
├── 📁public
|
├── 📁src
|   ├── 📁components
|   |   ├── 📁All-day
|   |   ├── 📁Breakfast
|   |   ├── 📁ButtonDefault
|   |   ├── 📁ButtonImg
|   |   ├── 📁ButtonRadio
|   |   ├── 📁ButtonSelect
|   |   ├── 📁CarArea
|   |   ├── 📁CartItem
|   |   ├── 📁DateTime
|   |   ├── 📁ErrorMessage
|   |   ├── 📁Header
|   |   ├── 📁Input
|   |   ├── 📁LinkAside
|   |   ├── 📁ListAllOrders
|   |   ├── 📁Loader
|   |   ├── 📁NotFound
|   |   ├── 📁Popup
|   |   ├── 📁PopupCancel
|   |   └── 📁ProductArea
|   |
|   ├── 📁img
|   |
|   ├── 📁pages
|   |   ├── 📁Hall
|   |   ├── 📁Login
|   |   ├── 📁OrdersPanel
|   |   └── 📁Register
|   |
|   ├── 📁services
|   |   
|   ├── 📁utils
|   |
|   ├── 📄global.scss
|   ├── 📄index.js
|   └── 📄routes.js
|   
├── 📄README.md
└── 📄package.json

```

## :bar_chart: Performance, Progressive Web App, Accessibility e Best Practices do Lighthouse
A aplicação superou a meta de 80% de pontuação do [Lighthouse](https://web.dev/) e o relatório completo pode ser visto [aqui](https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Fdivino-burger.vercel.app%2F#performance).

<div align="center" >
  <img alt="light-house-perfomance" src="./src/img/light-house-perfomance.png">
</div>

---

## ✔️ Resultados

* #### Tablet
<div style="display: flex" align="center">
  <img align="center" alt="gif-cadastro" height="600" width="800" src="./src/img/gif-cadastro.gif"><br><br>
  <img align="center" alt="gif-carrinho" height="600" width="800" src="./src/img/gif-carrinho.gif"><br><br>
  <img align="center" alt="gif-pedidos" height="600" width="800" src="./src/img/gif-pedidos.gif"><br><br>
  <img align="center" alt="gif-status" height="600" width="800" src="./src/img/gif-status.gif">
</div>

* #### Responsivo
![img](./src/img/gif-responsivo.gif)

---
## :woman_technologist: Sobre as desenvolvedoras

### Karen Freitas

- [LinkedIn](https://www.linkedin.com/in/karen-freitas/)
- E-mail: karenfcorrea@gmail.com
### Patrícia Barnabé

- [LinkedIn](https://www.linkedin.com/in/patriciabarnabe)
- E-mail: patbarnabe5@gmail.com

