const { Order } = require('../../models/order');

const getAllOrders = async (req, res, next) => {
  //   try {
  //     const id = req.userId;
  //     const { page = 1, limit = 5 } = req.query;
  //     const skip = (page - 1) * limit;
  //     const orders = await Order.find(
  //       {
  //         owner: id,
  //       },
  //       '-updatedAt'
  //     )
  //       .sort({ timestamps: -1, createdAt: -1 })
  //       .skip(skip)
  //       .limit(limit);
  //     res.json({ orders });
  //   } catch (error) {
  //     next(error);
  //   }
  res.status(200).json({
    resp: 'Orders',
  });
};

module.exports = getAllOrders;
