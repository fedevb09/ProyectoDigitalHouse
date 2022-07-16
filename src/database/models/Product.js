const { DataTypes } = require("sequelize/types");
const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {

    let alias = "Product"

    let cols = {

        id: {

            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            unique: true

        },

        description: DataTypes.TEXT,

        price: {

            type: DataTypes.INTEGER(11),
            allowNull: false

        },

        img1: DataTypes.STRING(200),
        
        img2: DataTypes.STRING(200),

        img3: DataTypes.STRING(200),

        sizes: DataTypes.STRING(200),

        creatorName: {

            type: DataTypes.INTEGER(11),
            allowNull: false

        },

        stock: DataTypes.INTEGER(11),

        createdAt: DataTypes.DATE,

        updatedAt: DataTypes.DATE

        }

        let config = {

            tableName: "products",
            timestamps: true,
            underscored: false
    }

    const Product = sequelize.define(alias, cols, config)

    return Product

}