const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'classic',
  },
  {
    tag_name: 'seasonal',
  },
  {
    tag_name: 'limited',
  },
  {
    tag_name: 'special edition',
  },
  {
    tag_name: 'charity',
  },
  {
    tag_name: 'away team',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
