import { Express } from "express";
import { createProduct, getAllProducts, getSingleProduct, updateProduct, deleteProduct } from "$/controller/product.controller.js";


const product = (app: Express) => {
  app.post("/products", createProduct);
  app.get("/products", getAllProducts);
  app.get("/products/:id", getSingleProduct);
  app.put("/products/:id", updateProduct);
  app.delete("/products/:id", deleteProduct);
};
export default product;

