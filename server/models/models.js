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
    count: {type: DataTypes.INTEGER, allowNull: false, validate: {min:1}}
})

const Favourit = sequelize.define('favourit', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const FavouritList = sequelize.define('favourit_list', {})

const Products = sequelize.define('products', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    info: {type: DataTypes.TEXT},
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})


User.hasOne(Basket, { onDelete: "cascade"})
Basket.belongsTo(User)

Type.hasMany(Products)
Products.belongsTo(Type)

Brand.hasMany(Products)
Products.belongsTo(Brand)

User.hasOne(Favourit, { onDelete: "cascade"})
Favourit.belongsTo(User)


Basket.belongsToMany(Products, {through:BasketList})
// BasketList.belongsTo(Basket)

Products.belongsToMany(Basket, {through:BasketList})
// BasketList.belongsTo(Products)

Basket.belongsToMany(Products, {through:FavouritList})
Products.belongsToMany(Favourit, {through:FavouritList})


module.exports = {
    User,
    Basket,
    BasketList,
    Products,
    Type,
    Brand,
    Favourit,
    FavouritList
}