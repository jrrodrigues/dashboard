\# Dashboard Institucional



\## Sobre o Projeto



Este projeto é um protótipo de \*\*Dashboard Institucional Responsivo\*\* desenvolvido com \*\*HTML5\*\*, \*\*CSS3\*\* e \*\*JavaScript Vanilla\*\*.



A aplicação simula um portal corporativo utilizado por órgãos públicos, empresas ou ambientes de intranet, oferecendo uma interface moderna para acompanhamento de indicadores, notícias, atividades e gráficos gerenciais.



\---



\## Funcionalidades



\### Dashboard



\- Exibição de indicadores estratégicos

\- Cards informativos

\- Área de notícias e comunicados

\- Atividades recentes

\- Ações rápidas



\### Navegação



\- Menu lateral institucional

\- Destaque visual do item selecionado

\- Interface responsiva para desktop e dispositivos móveis



\### Gráficos



\- Processos por mês (gráfico de barras)

\- Distribuição de demandas (gráfico de rosca)

\- Produtividade anual (gráfico de linha)



Os gráficos são gerados utilizando a biblioteca \*\*Chart.js\*\*.



\---



\## Tecnologias Utilizadas



\- HTML5

\- CSS3

\- JavaScript ES6

\- Chart.js

\- Playwright (testes automatizados)



\---



\## Estrutura do Projeto



```text

dashboard/

│

├── index.html

├── style.css

├── app.js

│

├── tests/

│   └── dashboard.spec.js

│

└── README.md

```



\---



\## Instalação



\### Clonar o projeto



```bash

git clone https://github.com/seu-repositorio/dashboard.git

```



\### Entrar na pasta



```bash

cd dashboard

```



\---



\## Executando Localmente



\### Opção 1 - VS Code



Instale a extensão:



```text

Live Server

```



Execute:



```text

Open with Live Server

```



\---



\### Opção 2 - HTTP Server



Instale:



```bash

npm install -g http-server

```



Execute:



```bash

http-server .

```



Acesse:



```text

http://localhost:8080

```



\---



\## Dependência dos Gráficos



Inclua o CDN do Chart.js antes do arquivo JavaScript principal:



```html

<script src="sdelivr.net/npm/chart.jsscript>

<script src="app.js"></script>

```



\---



\## Testes Automatizados



O projeto possui exemplos de testes utilizando Playwright.



\### Instalar dependências



```bash

npm install

```



\### Instalar Playwright



```bash

npm install -D @playwright/test

npx playwright install

```



\---



\## Executar os Testes



```bash

npx playwright test

```



\### Modo Visual



```bash

npx playwright test --headed

```



\### Abrir Relatório



```bash

npx playwright show-report

```



\---



\## Exemplo de Teste



```javascript

test('deve exibir o card de documentos', async ({ page }) => {



&#x20;   await page.goto('http://localhost:8080');



&#x20;   await expect(

&#x20;       page.locator('#card-documentos')

&#x20;   ).toBeVisible();



});

```



\---



\## Melhorias Futuras



\- Autenticação de usuários

\- Consumo de API REST

\- Dashboard em tempo real

\- Tema claro e escuro

\- Controle de permissões

\- Exportação para PDF e Excel

\- Integração com banco de dados

\- Notificações em tempo real



\---



\## Responsividade



O sistema foi desenvolvido seguindo a abordagem de design responsivo, adaptando-se aos seguintes dispositivos:



\- Desktop

\- Notebook

\- Tablet

\- Smartphone



\---



\## Licença



Projeto utilizado para fins educacionais, estudos e prototipação de interfaces institucionais.



\---



\## Autor



\*\*Jairo Rodrigues de Oliveira\*\*



Protótipo de Dashboard Institucional desenvolvido com HTML, CSS, JavaScript, Chart.js e Playwright.

