<h2>Controle Financeiro - README</h2>

<p>Este é um projeto de controle financeiro desenvolvido para um cliente gerenciar as finanças de da sua igreja. O projeto foi construído utilizando tecnologias modernas e boas práticas de desenvolvimento web.</p>

<h3>Tecnologias Utilizadas:</h3>

<ul>
  <li><strong>Front-end:</strong>
    <ul>
      <li>React.js: Utilizado para criar uma interface de usuário dinâmica e responsiva.</li>
      <li>Next.js: Framework React utilizado para renderização do lado do servidor (SSR) e pré-renderização estática (SSG), oferecendo uma experiência de carregamento rápido.</li>
      <li>Tailwind CSS: Framework de CSS utilizado para estilização, permitindo uma abordagem de desenvolvimento baseada em componentes e classes utilitárias.</li>
      <li>React-datepicker: Componente utilizado para facilitar a seleção de datas pelos usuários.</li>
      <li>react-apexcharts: Biblioteca utilizada para criar gráficos interativos e visualizações de dados.</li>
    </ul>
  </li>
  <li><strong>Back-end:</strong>
    <ul>
      <li>Node.js: Utilizado para construir o servidor back-end, gerenciando a lógica de negócios e a comunicação com o banco de dados.</li>
      <li>MongoDB Atlas: Banco de dados NoSQL hospedado na nuvem, utilizado para armazenar e gerenciar os dados financeiros dos usuários.</li>
      <li>Mongoose: Biblioteca Node.js utilizada como ODM (Object Data Modeling) para modelar os dados e simplificar as operações de banco de dados.</li>
    </ul>
  </li>
  <li><strong>Segurança e Autenticação:</strong>
    <ul>
      <li>JWT (JSON Web Tokens): Utilizado para autenticar usuários e proteger as rotas da aplicação.</li>
      <li>bcrypt: Biblioteca utilizada para o hash e a verificação de senhas, garantindo a segurança das informações sensíveis dos usuários.</li>
    </ul>
  </li>
</ul>

<h3>Funcionalidades Principais:</h3>

<ul>
  <li>Registro e autenticação de usuários com diferentes níveis de acesso: Administrador, Presidente, Tesoureiro, Pastor, Membros e Contabilidade.</li>
  <li>Criação de transações como: Receitas, Despesas, transferências e Rendimento.</li>
  <li>Criação e personalização de categorias.</li>
  <li>Gerenciamento de despesas e receitas, com categorização e visualização em gráficos interativos.</li>
  <li>Geração de relatórios financeiros detalhados em formato PDF. (TO FIX) </li>
  <li>Interface de usuário intuitiva e responsiva, proporcionando uma experiência de usuário agradável.</li>
</ul>

<h3>Como Executar o Projeto:</h3>

<ol>
  <li>Clone o repositório para sua máquina local.</li>
  <li>Instale as dependências do projeto utilizando o comando <code>npm install ou npm i</code> na pasta raiz do projeto.</li>
  <li>Configure as variáveis de ambiente necessárias para conexão com o MongoDB Atlas, AWS S3 e JWT e outras configurações relevantes.</li>
  <li>Execute o projeto utilizando o comando <code>npm run dev</code> na pasta raiz.</li>
  <li>Acesse a aplicação em seu navegador utilizando o endereço <code>http://localhost:3000</code>.</li>
</ol>

<h3>Contribuindo:</h3>

<p>Contribuições são bem-vindas! Este projeto é o "CLONE" do que o cliente está usando. Sinta-se à vontade para abrir um pull request com melhorias, correções de bugs ou novas funcionalidades.</p>

<h3>Autor:</h3>

<p>Nascimento Tales</p>

<h3>Licença:</h3>

<p>Este projeto está licenciado sob a Licença MIT.</p>



<h2>Rotas da Aplicação</h2>

<h3>Aqui estão as principais rotas da aplicação, detalhando os endpoints disponíveis, seus métodos HTTP e os parâmetros necessários:</h3>

<h4>Usuários</h4>

<p><strong>GET</strong> /api/v1/users</p>
<p><strong>POST</strong> /api/v1/users/signup</p>
<p><strong>POST</strong> /api/v1/users/login</p>
<p><strong>POST</strong> /api/v1/users/new-password</p>
<p><strong>POST</strong> /api/v1/users/recivery-password</p>
<p><strong>DELETE</strong> /api/v1/users/:id</p>
<p><strong>PATCH</strong> /api/v1/users/:id</p>

<h4>Transações</h4>

<p><strong>POST</strong> /api/v1/transactions</p>
<p><strong>POST</strong> /api/v1/transactions/get-report</p>
<p><strong>POST</strong> /api/v1/transactions/get-by-year-and-month</p>
<p><strong>POST</strong> /api/v1/transactions/get-by-type</p>
<p><strong>DELETE</strong> /api/v1/transactions/:id</p>
<p><strong>PATCH</strong> /api/v1/transactions/:id</p>

<p><strong>GET</strong> Como estou usando o Nextjs estou fazendo o GET direto no SSR vai ver isso na página de transactions</p>

<h4>Rules(regras, funções, permições)</h4>

<p><strong>GET</strong> /api/v1/rules</p>
<p><strong>POST</strong> /api/v1/rules</p>

<h4>Documentos</h4>

<p><strong>GET</strong> /api/v1/documents</p>
<p><strong>POST</strong> /api/v1/documents</p>
<p><strong>GET</strong> /api/v1/documents/:search</p>
<p><strong>DELETE</strong> /api/v1/documents/:id</p>

<h4>Categorias</h4>

<p><strong>GET</strong> /api/v1/categories</p>
<p><strong>POST</strong> /api/v1/categories</p>
<p><strong>DELETE</strong> /api/v1/categories/:id</p>
<p><strong>PATCH</strong> /api/v1/categories/:id</p>

<p><strong>Várias melhorias foram feitas no proleto principal e mergeada, por isso aqui no projeto, terão algumas "gambiarras".</strong></p>
