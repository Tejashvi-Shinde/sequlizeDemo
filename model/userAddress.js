const { Sequelize } = require('sequelize');
var sequelize = require('../Database');
const User = require('./user');
const Address = sequelize.define('address',
    {

        address_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        userid: { type: Sequelize.INTEGER, allowNull: false, foreignKey: true },
        Area: { type: Sequelize.STRING, allowNull: false },
        City: { type: Sequelize.STRING, allowNull: false },
        State: { type: Sequelize.STRING, allowNull: false },
        PinCode: { type: Sequelize.INTEGER, allowNull: false },

        // Timestamps
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
    },
    //add scope
    {
        scopes: {
            City: {
                where: {
                    City: 'pune,',
                }
            },
            PinCode: {
                where: 416405
            },
            userid: {
                where: {
                    userid: 2
                }
            }
        }
    },
    { sequelize, modelName: 'Address' },
);
//Association
Address.hasMany(User);
Address.belongsTo(User, { foreignKey: 'userid', });

module.exports = Address;