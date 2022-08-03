const express = require('express');
var router = express.Router();

//check get api for running routes


router.get('/', function (req, res) {

    res.send({ message: 'Hello Customer.' })
});

var userController = require('./controller/crudOperation');
router.post('/createUser', userController.createUser);

//get user list
router.post('/getUserList', userController.getUserList);

router.post('/deleteUser', userController.deleteUser);
router.post('/updateUser', userController.updateUser);


var userAddressController = require('./controller/userAddressController');
router.post('/createUserAddress', userAddressController.createUserAddress);

//get user address
router.post('/getUserAddress', userAddressController.getUserAddress);

//transaction
var usertrans = require('./controller/userTransaction');
router.post('/userTrans', usertrans.userTrans);

module.exports = router;