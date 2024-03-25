import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.ObjectId,
        ref: "Product",
      },
    ],
    payment: {},
    buyer: {
      type: mongoose.ObjectId,
      ref: "User",
    },
    status: {
      type: String,
      default: "Not processing",
      enum: ["Not Processing", "Processing", "Shipping", "Deliverd", "Cancel"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
