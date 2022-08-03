

var sequelize = require('../Database');
var User = require('../model/user');

exports.userTrans = (req, res) => {
    console.log("@@@@dsfqwws")
    return sequelize.transaction(t => {
        return User.create({
            name: 'Abraham',
            myDate: 2022 - 05 - 3
        }, { transaction: t }).then(user => {
            return user.setShooter({
                name: 'John',
                myDate: 2022 - 05 - 23
            }, { transaction: t });
        });

    }).then(result => {
        res.status(200).send({
            message: "Successfull."
        });
    }).catch(err => {
        res.status(400).send({
            message: "Not Successfull."
        });
    });
}