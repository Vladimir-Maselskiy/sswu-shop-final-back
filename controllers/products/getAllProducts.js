const { Products } = require('../../models/product');

const getAllProducts = async (req, res, next) => {
  //   try {
  //     const id = req.userId;
  //     const { page = 1, limit = 5 } = req.query;
  //     const skip = (page - 1) * limit;
  //     const products = await Products.find(
  //       {
  //         owner: id,
  //       },
  //       '-updatedAt'
  //     )
  //       .sort({ timestamps: -1, createdAt: -1 })
  //       .skip(skip)
  //       .limit(limit);
  //     res.json({ transactions, userBalance });
  //   } catch (error) {
  //     next(error);
  //   }
  res.status(200).json({
    resp: 'Products',
  });
};

module.exports = getAllProducts;
