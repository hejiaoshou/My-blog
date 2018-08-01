var express = require('express');
var router = express.Router();
var User = require('../mongo/User');

router.post('/users/add', function(req, res) {
  User.addUser(req.body).then((_res) => {
      res.json({
        code: 0,
        data: _res
      })
    }, (err) => {
      res.json({
        code: 1,
        data: err
      })
    })

});

router.post('/users/all', function (req, res) {
  User.findAllUser().then((_res) => {
    res.json({code: 0, data: _res})
  },(err) => res.json({code: 1, data: err}))
})

module.exports = router;
