const sequelize = require('../db')
const {DataTypes} = require('sequelize')  //описываютсчя типы полей


const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'}
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketList = sequelize.define('basket_list', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Products = sequelize.define('products', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    info: {type: DataTypes.STRING},
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})


User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketList)
BasketList.belongsTo(Basket)

Type.hasMany(Products)
Products.belongsTo(Type)

Brand.hasMany(Products)
Products.belongsTo(Brand)

Products.hasMany(BasketList)
BasketList.belongsTo(Products)


module.exports = {
    User,
    Basket,
    BasketList,
    Products,
    Type,
    Brand,
}