import { Express } from "express";
import { createCategory, getAllCategory, getSinglecategory, updateCategory, deleteCategory } from "$/controller/category.controller.js";



const category = (app: Express) => {
  app.post("/categories", createCategory);
  app.get("/categories", getAllCategory);
  app.get("/categories/:id", getSinglecategory);
  app.put("/categories/:id", updateCategory);
  app.delete("/categories/:id", deleteCategory);
};
export default category;
