import Sequelize from "sequelize";

const dbconnection = new Sequelize(process.env.CLEARDB_DATABASE_URL, {
    host: process.env.HOST,
    dialect:  process.env.DIALECT
});


export default dbconnection;

