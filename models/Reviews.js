const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Reviews extends Model { }

Reviews.init(
    {
        //define columns
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        // define books_id column
        book_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            unique:true,
            references: {
                model: "books",
                key: "id"
            }
        },
        // define user_id column
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true, 
            unique:true,
            references: {
                model: "user",
                key: "id"
            }
        }

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