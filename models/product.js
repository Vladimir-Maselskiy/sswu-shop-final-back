const { Schema, model } = require('mongoose');
// const Joi = require("joi");

// const { handleSaveErrors } = require("../utils");
// const { string } = require("joi");

const productsSchema = new Schema(
  {
    group: {
      type: String,
      required: [true, 'Group is required'],
    },
    image: {
      type: String,
      required: [true, 'Image is required'],
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
    },
    discount: {
      type: Number,
      default: 0,
    },
    timestamps: {
      type: Number,
      default: Number(new Date()),
    },
    rate: {
      type: Number,
      default: 3.5,
    },

    mainProductInfo: {
      type: String,
      required: [true, 'Main Product Info is required'],
    },

    description: {
      type: String,
      required: [true, 'Description is required'],
    },

    additionalInfo: {
      type: String,
      required: [true, 'Additional info is required'],
    },
  },
  { versionKey: false, timestamps: true }
);

// transactionSchema.post("save", handleSaveErrors);

// const addSchema = Joi.object({
// 	typeOperation: Joi.string().required(),
// 	category: Joi.string().required(),
// 	comment: Joi.string(),
// 	date: Joi.string(),
// 	amount: Joi.number().required(),
// });

const Product = model('products', productsSchema);

module.exports = { Product };
