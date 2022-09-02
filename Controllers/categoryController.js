import category from "../Models/Category.js";


class CategoryController {


  /************** GET  ********************/
  static getCategory = (req, res) => {
    //use the find method in the product model
    category.find((err, category) => {
      res.status(200).json(category);
    });
  };

  /************** POST ********************/
  static postCategory = (req, res) => {
    //create a new products Object. Req body receives de json that contains the products attributes values
    let category = new category(req.body);

    category.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: "erro ao cadastrar o Produto:" + err.message });
      } else {
        res.status(201).send(category.toJSON());
      }
    });
  };

}

export default CategoryController;
