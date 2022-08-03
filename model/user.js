
const { Sequelize } = require('sequelize');
var sequelize = require('../Database');
const User = sequelize.define('user', {
    user_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false, isEmail: true, },
    myDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    // Timestamps
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
},
    { sequelize, modelName: 'User' }
);

module.exports = User

