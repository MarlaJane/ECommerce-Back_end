const { Product } = require('../models');

const productData = [
  {
    product_name: 'Classic Bruins T-Shirt',
    price: 29.99,
    stock: 107,
    category_id: 1,
  },
  {
    product_name: 'Black Zip Hoodie w/ Bear Logo',
    price: 96.99,
    stock: 31,
    category_id: 2,
  },
  {
    product_name: 'Official Pro Jersey',
    price: 339.99,
    stock: 14,
    category_id: 3,
  },
  {
    product_name: 'Kids Jersey',
    price: 149.99,
    stock: 12,
    category_id: 3,
  },
  {
    product_name: 'Black Bruins Logo Baseball Cap',
    price: 24.99,
    stock: 53,
    category_id: 4,
  },
  {
    product_name: 'Big Bad Bruins Coffee Mug',
    price: 19.99,
    stock: 74,
    category_id: 5,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
