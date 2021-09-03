import Sequelize from "sequelize";
// import dotenv from "dotenv";
// dotenv.config();
const dbconnection = new Sequelize(process.env.CLEARDB_DATABASE_URL, {
    host: process.env.HOST,
    dialect:  process.env.DIALECT
});


export default dbconnection;

