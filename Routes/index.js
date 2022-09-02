import express from "express";
import productsRoutes from "./productsRoutes.js";
import categoryRoutes from "./categoryRoutes.js";
//import livros from "./livrosRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send("Backend Online");
  });

  //app.use(express.json(), livros, autores);
  app.use(express.json(),productsRoutes);
  app.use(express.json(),categoryRoutes);
};

export default routes;
