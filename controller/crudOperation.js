var sequelize = require('../Database');
var User = require('../model/user');

//create user
exports.createUser = (req, res) => {
    var username = req.body.username;
    var useremail = req.body.useremail;
    var usermyDate = req.body.usermyDate;
    // Validate request
    if (!username) {
        res.status(400).send({
            message: "username can not be empty!"
        });
        return;
    } else if (!useremail) {
        res.status(400).send({
            message: "useremail can not be empty!"
        });
        return;
    } else if (!usermyDate) {
        res.status(400).send({
            message: "usermyDate can not be empty!"
        });
        return;
    }

    // Create a Tutorial
    const user = {
        name: username,
        email: useremail,
        myDate: usermyDate
    };

    // Save Tutorial in the database
    User.create(user)
        .then(data => {
            res.send({
                data,
                message: "data saved"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({
                message: "Some error occurred while creating the user."

            });
        });
};

//update user
exports.updateUser = async (req, res) => {
    var username = req.body.username;
    var userId = req.body.userId;
    if (!userId) {
        res.status(400).send({
            message: "Please select valid user."
        });
        return;
    } else if (!username) {
        res.status(400).send({
            message: "Please select valid user."
        });
        return;
    }
    let data = await User.update({ name: username }, {
        where: {
            user_id: userId
        }
    });
    res.status(200).send({
        message: "Successfull.",
        data: data,
    })



}


exports.getUserList = async (req, res) => {
    let data = await User.findAll({})
    res.status(200).send({
        message: "Get User list.",
        data: data,
    })
}

exports.deleteUser = async (req, res) => {

    var userId = req.body.userId;
    if (!userId) {
        res.status(400).send({
            message: "Please select valid user."
        });
        return;
    }
    let user = await User.destroy({ where: { user_id: userId } })

    res.status(200).send({
        message: "User Deleted Successfully.",

    })

}

