const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {

    let alias = "Category"

    let cols = {

        id: {

            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            unique: false

        },

        name: {

            type: DataTypes.STRING(200),
            allowNull: false

        },

        createdAt: DataTypes.DATE,

        updatedAt: DataTypes.DATE
        
    }

    let config = {

        timestamps: true,
        underscored: false,
        tableName: "categories"
    }

    const Category = sequelize.define(alias, cols, config)

    return Category

}