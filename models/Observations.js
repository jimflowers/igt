const Sequelize = require('sequelize');
const db = require ('../config/database');


const Unit = db.define ('unitsofobs',{
    ID : {
        type:Sequelize.INTEGER
    },
    Title_Chapter : {
        type :  Sequelize.CHAR(45)
    },
    OCGA : {
        type :  Sequelize.CHAR(45)
    },
    Observation: {
        type :  Sequelize.STRING(1234)
    },
    Doc_ID: {
        type :  Sequelize.NUMBER
    },
    Obs_No : {
        type: Sequelize.NUMBER
    },
    Startline : {
        type: Sequelize.NUMBER
    },
    Endline : {
        type : Sequelize.NUMBER
        },


});

module.exports = Unit;