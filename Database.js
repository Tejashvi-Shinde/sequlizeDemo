
const Sequelize = require("sequelize");
const config = require('./db/config');
const sequelize = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password, {
    host: config.development.host,
    dialect: config.development.dialect
});

sequelize.sync().then(() =>
    console.log("Connected to the database !")
);

module.exports = sequelize;
