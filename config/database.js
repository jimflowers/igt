// initialize database connection

const sequelize = require('sequelize');

module.exports = new sequelize('mydb','jim','Matthew7$13',{
    host:'localhost',
    dialect : 'mysql',


    pool: {
        max:100,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

//test db




