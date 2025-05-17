import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a product name'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide a product description'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide a product price'],
      min: [0, 'Price cannot be negative'],
    },
    image: {
      type: String,
      required: [true, 'Please provide a product image'],
    },
    category: {
      type: String,
      required: [true, 'Please provide a product category'],
      enum: ['formal', 'casual', 'boots'],
    },
    featured: {
      type: Boolean,
      default: false,
    },
    stock: {
      type: Number,
      required: [true, 'Please provide stock amount'],
      min: [0, 'Stock cannot be negative'],
    },
    rating: {
      type: Number,
      default: 0,
      min: [0, 'Rating cannot be below 0'],
      max: [5, 'Rating cannot be above 5'],
    },
    sizes: {
      type: [String],
      required: [true, 'Please provide available sizes'],
    },
    colors: {
      type: [String],
      required: [true, 'Please provide available colors'],
    },
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

export default Product;