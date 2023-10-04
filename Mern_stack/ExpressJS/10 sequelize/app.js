import {Sequelize,DataTypes} from "sequelize";
import express from "express";
import mysql from "mysql";

var app = express();
var sequelize = new Sequelize(
    'sequelizedb',
    'root',
    'root',
    {
        host:"127.0.0.1",
        dialect : "mysql"
    }
);
sequelize.authenticate().then(()=>{
    console.log("connection established successfully");
}).catch((err)=>{
    console.log("error while establishing connection : "+err);
});

var student = sequelize.define("student",{
    sid:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING(45),
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{tableName:"student"}); // restricting not to create plural name of table
/*
  due to plural convension, as it will create table by students although we give student as its name.
*/

student.sequelize.sync().then(()=>{
    console.log("table created successfully");
    /*
        var payload = {
            name:"Andrew Anderson",
            email:"andrew@gmail.com",
            password:"andrew@123"
        }
        student.create(payload).then(()=>{
            console.log("Data Inserted Successfully");
        }).catch(()=>{
            console.log("Error occured");
        });
    */

    /*        
        var payload = [{
            name:"Mathew Math",
            email:"mathew@gmail.com",
            password:"mathew@123"
        },{
            name:"Jackson Jack",
            email:"jackson@gmail.com",
            password:"jackson@123"
        },{
            name:"Anderson Andy",
            email:"anderson@gmail.com",
            password:"anderson@123"
        }
        ]
        student.bulkCreate(payload).then(()=>{
            console.log("Data Inserted Successfully");
        }).catch(()=>{
            console.log("Error occured");
        });
    */
        student.findOne().then((result)=>{
          //  console.log(result);
          //  console.table(result);
            console.log(result.get({plain:true}));
        //  console.log(result[0].dataValues.email);
        }).catch(()=>{
            console.log("Error occured");
        });
    
    /*
        student.findOne({
            where :{
                sid:1
            }
        }).then((result)=>{
              console.log(result);
          }).catch(()=>{
              console.log("Error occured");
          });
    */
   /*
       student.destroy({
            where :{
                sid:3
            }
        }).then((result)=>{
              console.log("Data deleted successfully : "+result);
          }).catch(()=>{
              console.log("Error occured");
          });
     */
    
     /*     
        student.update({
            name: "Andrew",
            password:"andrew@123"
        },{
            where :{
                sid:2
            }
        }).then((result)=>{
              console.log(result);
          }).catch(()=>{
              console.log("Error occured");
          });
    */
}).catch(()=>{
    console.log("error while creating table");
});



app.listen(3000,()=>{
    console.log("Server connection sucessfull");
});