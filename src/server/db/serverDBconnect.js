import Sequelize from "sequelize";

const dbconnection = new Sequelize(process.env.CLEARDB_DATABASE_URL, {
    host: 'localhost',
    dialect:  'mysql'
});


export default dbconnection;

