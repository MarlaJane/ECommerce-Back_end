const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

router.get('/', (req, res) => {
  Tag.findAll({
    include: [{ model: Product, through: ProductTag, as: 'tagged_products' }]
  })
  .then((tags) => res.status(200).json(tags))
  .catch((err) => res.status(400).json(err))
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [{ model: Product, through: ProductTag, as: 'tagged_products' }],
  }).then((tag) => res.status(200).json(tag))
    .catch((err) => res.status(404).json(err))
});

router.post('/', (req, res) => {
  Tag.create(req.body)
  .then((tag) => res.status(200).json(tag))
  .catch((err) => res.status(404).json(err))
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  .then((tag) => res.status(200).json(tag))
  .catch((err) => res.status(404).json(err))
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((tag) => {
    console.log(tag);
    res.json(tag);
    res.status(200);
  })
  .catch((err) => {
    console.log(err);
    res.status(404);
    res.json(err);
  })
});

module.exports = router;