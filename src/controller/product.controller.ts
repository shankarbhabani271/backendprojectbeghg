import { ProductModel } from "../models/product.model.js";
import { NextFunction, Request, Response } from "express";

// CREATE PRODUCT
export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await ProductModel.create(req.body);

    res.success({
      message: "Product created successfully",
      data: product
    });

  } catch (error) {
    next(error);
  }
};
// GET ALL PRODUCTS
export const getAllProducts = async (_req: Request, res: Response) => {
  try {
    const products = await ProductModel.find().populate("category");

    res.status(200).json({
      success: true,
      message: "Products retrieved successfully",
      data: products
    });

  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// GET SINGLE PRODUCT
export const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const product = await ProductModel.findById(req.params.id).populate("category");

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product retrieved successfully",
      data: product
    });

  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// UPDATE PRODUCT
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const product = await ProductModel.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: product
    });

  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// DELETE PRODUCT
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const product = await ProductModel.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product deleted successfully"
    });

  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

