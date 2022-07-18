const dbConfig = require('../config/config');
const Model = dbConfig.Sequelize.Model; 
const sequelize = dbConfig.sequelizeTZ;

const Op        = dbConfig.Sequelize.Op;    

class RoleModel extends Model { 
}

RoleModel.init({
  id: {
    type: dbConfig.Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: dbConfig.Sequelize.STRING,
    allowNull: true
  },   
  created_at: {
    type: dbConfig.Sequelize.DATE,
    allowNull: true,
    defaultValue: new Date().toISOString()
  },
  updated_at: {
    type: dbConfig.Sequelize.DATE,
    allowNull: true,
    defaultValue: new Date().toISOString()
  }
}, {
    sequelize,
  timestamps: false,
  modelName: 'role',
  freezeTableName: true
});

 

module.exports = RoleModel;