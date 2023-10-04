import sequelize from "./dbConfig.js";
import { DataTypes } from "sequelize";

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
}).catch(()=>{
    console.log("error while creating table");
});

export default student;