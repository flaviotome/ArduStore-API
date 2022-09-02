import express from "express";
import db from "./dbConnect.js";
import routes from "./routes/index.js";

//retorna a mensagem em caso de err
db.on("error", console.log.bind(console, "Erro de Conexão"));

//roda a conexão uma vez
db.once("open", () => {
  console.log("conexao feita com sucesso");
});

//cria uma instância do express
const app = express();
app.use(express.json());

//informa ao servidor que o localhost está autorizado a acessar o banco
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", true);
  return next();
});

//passa a instância do expresse para o arquivo de rotas
routes(app);

export default app;
