 
 const UserModel =  require('../models/UserModel')
 const dbConfig = require('../config/config');
const Model = dbConfig.Sequelize.Model; 
const sequelize = dbConfig.sequelizeTZ; 
const Op        = dbConfig.Sequelize.Op;    

const list =  async (req,res)=>{

    try{  

        //----------- Insert -----------
        // let insertData =  await UserModel.create({
        //     name:'Code Improve',email:'code@gmail.com',role_id:1
        // })

        //-------- Update -----------
        // let dataupdate = await UserModel.update({
        //     name:'code Improve2'
        // },{
        //     where:{id:22}
        // })

        ///-- delete ------
        // let datadelete =  await UserModel.destroy({
        //     where:{id:22}
        // })

        //---- bulk insert & update ---------///

        // let bulk = await UserModel.bulkCreate([
        //     {
        //        id:23, name:'bulk1testupdate',email:'bulk1update@gmail.com',role_id:1
        //     },
        //     {
        //         name:'bulk3',email:'bulk2@gmail.com',role_id:1
        //     }
        // ],{ updateOnDuplicate:["name","email"] })


         
        // let result = await UserModel.findAll({
        //     //attributes:["name","email","role_id"]

        //     attributes:{
        //         exclude:['created_at','updated_at'],
        //         include:[
        //             [sequelize.fn('CONCAT',sequelize.col('name'),' Singh'),'fullname']
        //         ]
        //     }
        // });


        // let result = await UserModel.findAll({
        //     attributes:["id","name",["email","emailID"],"role_id"],
        //     where:{ 
        //         email:{[Op.like]: '%@gmail.com%' }
        //     },
        //     order:[
        //         ["name","DESC"],
        //         ["email","ASC"]
        //     ],
        //     limit:4,
        //     offset:3,
        //     group:['email','name'] 
          
        // }); 
        // let result = await  sequelize.query("select * from user where name = ? AND email = ?",{
        //     type:dbConfig.Sequelize.QueryTypes.SELECT,
        //    // replacements:{name:'firstsppp'}
        //    replacements:["firstsppp","first@gmail.com"]
        // })

        let result = await  UserModel.list();
        res.status(200).json(result) 
    }catch(e){
        res.status(400).json(e)  
    }
   
}

module.exports = {
    list
}