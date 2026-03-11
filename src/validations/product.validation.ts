import { z } from "zod";

export const createProductSchema = {
    body: z.object({
        name: z
            .string({ message: "Name is required" })
            .min(3, "Name must be at least 3 characters long")
            .nonempty("Name is required"),
        description: z
            .string({ message: "Description is required" })
            .min(30, "Description must be at least 30 characters long")
            .nonempty("Description is required"),
        Brand: z
            .string({ message: "Brand is required" })
            .min(3, "Brand must be at least 3 characters long")
            .nonempty("Brand is required"),
        category: z
            .string({ message: "Category is required" }),
        isActive: z
            .boolean({ message: "isActive must be a boolean value" })
    })

}