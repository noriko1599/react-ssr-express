var express = require('express');
const { fetchOrders } = require('../api/api');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  const { page = 1 } = req.query

  const orders = fetchOrders(page)

  return res.render('index', { name: 'Order list', orders, page });
});

module.exports = router;
