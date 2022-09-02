import mongoose from "mongoose";

//conecta ao banco. String gerada pelo Mongo Atlas
mongoose.connect("mongodb+srv://admin:123@cluster0.2gy3reg.mongodb.net/ArduStore");

//cria uma variável para exportar a conexão que foi gerada
let db = mongoose.connection;

export default db;
