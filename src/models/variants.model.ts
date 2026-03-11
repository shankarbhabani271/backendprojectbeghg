import mongoose from "mongoose";

const variantSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true
    },

    attributes: {
      type: mongoose.Schema.Types.Mixed,
      default: {}
    },

    attributesKey: {
      type: String,
      required: true
    },

    sku: {
      type: String,
      required: true,
      unique: true
    },

    price: {
      salePrice: {
        type: Number,
        required: true
      },
      mrp: {
        type: Number,
        required: true
      }
    },
  },
  { timestamps: true }
);

export const VariantModel = mongoose.model("Variant", variantSchema);