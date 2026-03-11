import { Express } from "express";
import { createVariant, getAllVariant, getSingleVariant, updateVariant, deleteVariant } from "$/controller/variants.controller.js";
import { validateRequest } from "$/middlewares/validate.middleware.js";
import { createVariantSchema } from "$/validations/variants.validation.js";



const variant = (app: Express) => {
    app.post("/variants",validateRequest(createVariantSchema), createVariant);
    app.get("/variants", getAllVariant);
    app.get("/variants/:id", getSingleVariant);
    app.put("/variants/:id", updateVariant);
    app.delete("/variants/:id", deleteVariant);
};
export default variant;