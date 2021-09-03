import Sequelize from "sequelize";
import dbconnection from "../serverDBconnect.js";

const scheme = {
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },

    login: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
}

const options = {
    freezeTableName: true,
    tableName: "users",
    timestamps: true,
    createdAt: "dataCriacao",
    updatedAt: "dataAtualizacao",
}

const connectionuser = dbconnection.define(process.env.DB_NAME, scheme, options)

export default connectionuser;
