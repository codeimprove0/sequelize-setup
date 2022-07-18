const {Sequelize,Model,DataTypes}  = require('sequelize');

let dbConfig = {
    db_name:'about',
    db_user:'root',
    db_pass:'root',
    con_type:'mysql',
    port:'3306',
    host:'localhost'
}

const sequelizeTZ = new Sequelize(dbConfig.db_name,dbConfig.db_user,dbConfig.db_pass,{
    host: dbConfig.host,
    dialect: dbConfig.con_type,
    port: dbConfig.port,
  //  logging:false
})


const connection = {};

connection.Sequelize = Sequelize;
connection.sequelizeTZ = sequelizeTZ;
connection.Model = Model;
connection.DataTypes = DataTypes

module.exports = connection;


