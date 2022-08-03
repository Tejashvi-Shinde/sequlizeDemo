var sequelize = require('../Database');
const User = require('../model/user');
const Address = require('../model/userAddress');
;
exports.createUserAddress = (req, res) => {
    var userid = req.body.userid;
    var Area = req.body.Area;
    var City = req.body.City;
    var State = req.body.State;
    var PinCode = req.body.PinCode;
    // Validate request

    // Create a Tutorial
    const address = {
        userid: userid,
        Area: Area,
        City: City,
        State: State,
        PinCode: PinCode,
    };

    // Save Tutorial in the database
    Address.create(address)
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

//using scope
exports.getUserAddress = (req, res) => {
    let data = Addressscope('City').findAll({
    });
    res.status(200).json(data);
}