npm install dotenv
npm install mongoose

--------------------------------------- Arquitetura MVC
Model, View And Controller
Controller -> responsável por receber os dados da requisição HTTP e pelas regras de negócio
Model -> responsável pelos dados internos da aplicação (interage com DB)...será??
View -> baseando-se nos dados,já processados pelo controller, gera as páginas da aplicação

- MVC:
Request --> Controller --> Model --> Controller --> View --> Controller --> Response

- Modelo aplicado na API:
Request --> Router (express) --> Controller --> Model --> Controller --> Router (express) --> Response


 npm install cors