const mongoose = require('./db_connect').mongo;

var User = new mongoose.Schema({

    account : { type: String },

    password : {type: String},

    name : { type: String },

    email : { type: String },

    CreatedTime : { type: Number, default: Date.now },

    LoginTime : { type: Number, default: Date.now }

});

var UserModel = mongoose.model("User", User );

exports.addUser = (data) => {
    return new Promise ((resolve, reject) => {
        UserModel.create({
            account: data.account,
            password: data.password,
            name: data.name,
            email: data.email
        }, (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

exports.deleteUser = (data) => {
    return new Promise ((resolve, reject) => {
        UserModel.deleteOne({

        }, (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

exports.selectUser = (data) => {
    return new Promise ((resolve, reject) => {
        UserModel.find({

        },(err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

exports.updateUser = (data) => {
    return new Promise ((resolve, reject) => {
        UserModel.updateOne({

        },(err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

exports.findAllUser = () => {
    return new Promise ((resolve, reject) => {
        UserModel.find({},(err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

exports.login = (data) => {
    return new Promise ((resolve, reject) => {
        UserModel.find({account: data.account,password: data.password},(err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}