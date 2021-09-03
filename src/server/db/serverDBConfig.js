import Sequelize from "sequelize";
import dbconnection from "./serverDBconnect.js";

const scheme = {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    details: {
        type: Sequelize.STRING(1234),
        allowNull: true
    },
    link: {
        type: Sequelize.STRING,
        allowNull: false
    }
}

const options = {
    freezeTableName: true,
    tableName: "posts",
    timestamps: true,
    createdAt: "dataCriacao",
    updatedAt: "dataAtualizacao",
    version: "versao"
}

const connection = dbconnection.define(process.env.DB_NAME, scheme, options)

export default connection;