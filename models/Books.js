const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Books extends Model { }

Books.init(
    {
        // define columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        book_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isbn_num: {
            type: DataTypes.BIGINT                      ,
            allowNull: false
        },
        stock_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        reserved_status: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        filename:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'books',
    }
);

module.exports = Books;