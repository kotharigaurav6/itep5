import { Sequelize} from "sequelize";
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

export default sequelize;