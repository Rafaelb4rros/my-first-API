import Sequelize from "sequelize";


const dbconnection = new Sequelize(
    process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_TYPE
  });


export default dbconnection;