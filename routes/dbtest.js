var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/blog");

	var User = new mongoose.Schema({

    	name : { type:String },

    	age  : { type:Number, default:0 },

	});

	var UserModel = mongoose.model("User", User );

  function addData (UserInfo) {
    return new Promise (function (resolve, reject) {
      UserModel.create({name: UserInfo.name, age: UserInfo.age},function (err, res) {
        if (err) {
          reject(err)
        } else {
          resolve(res);
        }
      })
    })
  }

  function selectData () {
    return new Promise (function (resolve, reject) {
      UserModel.find({},function (err, res) {
        if (err) {
          console.log(err)
        } else {
          resolve(res)
        }
      })
    })
  }

  function Updata (Username, UpName) {
    return new Promise (function (resolve, reject) {
      UserModel.updateMany({name:Username}, {name: UpName},function (err, res) {
        if (err) {
          console.log(err)
        } else {
          resolve({res: res,name:UpName});
        }
      })
    })
  }

  function Delete (Username) {
    return new Promise (function (resolve, reject) {
      UserModel.deleteMany({name:Username},function (err, res) {
        if (err) {
          console.log(err);
        } else {
          resolve(res);
        }
      })
    })
  }

router.post('/db/add', function(req, res, next) {
  addData(req.body).then(function (db_res) {
    res.json({code:0,msg:'添加成功'})
  },function (err) {
    res.json({ code: '1',msg: err});
  })
});

router.post('/db/updata', function(req, res, next) {
  Updata().then(function (db_res) {
    res.json({ title: 'Express' });
  },function (err) {

  })
});

router.post('/db/select', function(req, res, next) {
  selectData().then(function(db_res) {
    res.json({ code: 0,data: db_res });
  },function (err) {
    res.json({ code: 1 });
  })
});

router.post('/db/delete', function(req, res, next) {
  Delete().then(function (db_res) {
    res.json({ title: 'Express' });

  },function (err) {

  })
});

module.exports = router;