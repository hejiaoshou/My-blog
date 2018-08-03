var express = require('express');
var router = express.Router();
var User = require('../mongo/User');

router.post('/users/add', (req, res) => {
  User.addUser(req.body).then(_res => {
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

router.post('/users/login', (req, res) => {
  User.login(req.body).then(_res => {
    var msg = '账号或密码错误！'
    if (_res.length !== 0) {
      msg = '登陆成功'
    }
    res.json({
      code: 0,
      data: msg
    })
  },err => res.json({code: 1, data: err}))
})

router.post('/users/all', function (req, res) {
  User.findAllUser().then((_res) => {
    res.json({code: 0, data: _res})
  },err => res.json({code: 1, data: err}))
})

module.exports = router;
