const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Reviews extends Model { }

Reviews.init(
    {
        // define columns
        book_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'reviews',
    }
);

module.exports = Reviews;