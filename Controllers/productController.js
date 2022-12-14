import ObjectId from "mongoose/lib/types/objectid.js";
import products from "../Models/Product.js";

class ProductController {
  /************** GET  ********************/
  static getProducts = (req, res) => {
    //use the find method in the product model
    products.find((err, product) => {
      res.status(200).json(product);
      console.log(product);
    }).populate('productType');
  };

  /************** GET BY ID ********************/
  static getProductById = (req, res) => {
    products.findById(req.params.id, (err, product) => {
      if (err) {
        res.status(500).send("Nenhum produto encontrado!");
      } else {
        res.status(200).send(product);
      }
    });
  };
  /************** GET BY NAME ********************/
  static getProductByName = (req, res) => {
    const name = req.params.productName;

    products.find(
      { productName: { $regex: ".*" + name + ".*" } },
      (err, product) => {
        if (err) {
          res.status(500).send("Nenhum produto encontrado!");
        } else {
          res.status(200).send(product);
        }
      }
    );
  };

  /************** POST ********************/
  static postProduct = (req, res) => {
    //create a new products Object. Req body receives de json that contains the products attributes values
    let product = new products(req.body);

    product.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: "erro ao cadastrar o Produto:" + err.message });
      } else {
        res.status(201).send(product.toJSON());
      }
    });
  };

  /************** UPDATE ********************/

  static updateProduct = (req, res) => {
    //id is passed by the url ( http/address/products/$id )
    const id = req.params;

    //search by id and update using the mongoose $set method
    products.findByIdAndUpdate(ObjectId(id), { $set: req.body }, (err,product) => {
      if (!err) {
        res.status(200).send(product.toJSON());
      } else {
        res.status(500).send(err.message);
      }
    });
  };

  /************** DELETE ********************/
  static deleteProduct = (req, res) => {
    //id is passed by the url ( http/address/products/$id )
    const id = req.params.id;
    //search for the product by id and delete it
    products.findByIdAndDelete(id, (err) => {
      //if not ERROR
      if (!err) {
        res.status(200).send("Livro exclu??do com sucesso");
      } else {
        res
          .status(500)
          .send("N?? foi poss??vel excluir o livro:  " + err.message);
      }
    });
  };

  static getproductsByType = (req, res) => {
    const type = req.params.productType;

    products.find({ productType: type }, (err, product) => {
      if (err) {
        res.status(500).send("Erro ao carregar as placas" + err.message);
      } else {
        res.status(200).send(product);
      }
    });
  };
}

export default ProductController;
