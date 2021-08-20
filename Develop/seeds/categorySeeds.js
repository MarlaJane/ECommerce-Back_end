const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Sweatshirts',
  },
  {
    category_name: 'Jerseys',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Misc',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
