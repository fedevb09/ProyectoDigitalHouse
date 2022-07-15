const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {

    let alias = "Order"

    let cols = {

        id: {

            type: DataTypes.INTEGER(10),
            allowNull: false,
            autoIncrement: true,
            unique: true
        },

        subtotal: {

            type: DataTypes.INTEGER(10),
            allowNull: false
        },

        discount: DataTypes.INTEGER(10),

        total: {

            type: DataTypes.INTEGER(10),
            allowNull: false
        },

        proofOfPayment: {

            type: DataTypes.INTEGER(10),
            allowNull: false
        }
    }

    let config = {

        tableName: "orders",
        timestamps: true,
        underscored: false
    }

    const Order = sequelize.define(alias, cols, config)

    return Order
    
}