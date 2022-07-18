const dbConfig = require('../config/config');
const Model = dbConfig.Sequelize.Model; 
const sequelize = dbConfig.sequelizeTZ;

const Op        = dbConfig.Sequelize.Op;  

const RoleModel =  require('./RoleModel')
const PhotoModel =  require('./PhotoModel')

class UserModel extends Model { 
}

UserModel.init({
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
  email: {
    type: dbConfig.Sequelize.STRING,
    allowNull: true
  },
  role_id: {
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
  modelName: 'user',
  freezeTableName: true
});


UserModel.belongsTo(RoleModel,{
    foreignKey: 'role_id',
    targetKey:'id',
    as:'rl'
});

UserModel.hasMany(PhotoModel,{
    foreignKey: 'user_id',
    targetKey:'id',
    as:'pd'
})

UserModel.list = ()=>{
    return new Promise(async(resolve,reject)=>{

        let data =  await UserModel.findAll({
            attributes:["name","email","role_id",[sequelize.col('rl.name'),'role_name']],

            include:[{
                model:RoleModel,
                as:'rl',
                attributes:["name"],
                where: sequelize.literal('1=1 AND 23=23')
            },
            {
                model:PhotoModel,
                as:'pd',
                attributes:["url"]
            }],
            order:[[sequelize.literal("max(id)>2")]]
        });
        resolve(data);
    })
}

module.exports = UserModel;