const dbConfig = require('../config/config');
const Model = dbConfig.Sequelize.Model; 
const sequelize = dbConfig.sequelizeTZ;

const Op        = dbConfig.Sequelize.Op;    

class PhotoModel extends Model { 
}

PhotoModel.init({
  id: {
    type: dbConfig.Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  url: {
    type: dbConfig.Sequelize.STRING,
    allowNull: true
  }, 
  user_id: {
    type: dbConfig.Sequelize.INTEGER,
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
  modelName: 'photo',
  freezeTableName: true
});

 

module.exports = PhotoModel;