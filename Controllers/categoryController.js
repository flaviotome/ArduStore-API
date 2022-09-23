import category from "../Models/Category.js";

class CategoryController {
  /************** GET  ********************/
  static getCategory = (req, res) => {
    //use the find method in the product model
    category.find((err, category) => {
      res.status(200).json(category);
    });
  };

  /************** GET BY ID ********************/
  static getCategoryById = (req, res) => {
    category.findById(req.params.id, (err, category) => {
      if (err) {
        res.status(500).send("Nenhuma categoria encontrada!");
      } else {
        res.status(200).send(category);
      }
    });
  };

  /************** POST ********************/
  static postCategory = (req, res) => {
    //create a new products Object. Req body receives de json that contains the products attributes values
    let body = req.body;
    //this line remove the null _id from Angular object
    let c = new category({
      categoryName: body.categoryName,
    });

    console.log(c);
    c.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: "erro ao cadastrar o Produto:" + err.message });
      } else {
        res.status(201).send(c.toJSON());
      }
    });
  };

  /************** DELETE ********************/
  static deleteCategory = (req, res) => {
    //id is passed by the url ( http/address/products/$id )
    const id = req.params.id;
    //search for the product by id and delete it
    category.findByIdAndDelete(id, (err) => {
      //if not ERROR
      if (!err) {
        res.status(200).json(category);
      } else {
        res
          .status(500)
          .send("Nao foi possível excluir a Categoria:  " + err.message);
      }
    });
  };
}

export default CategoryController;
