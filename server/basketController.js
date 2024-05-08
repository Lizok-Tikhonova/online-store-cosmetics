const {Basket, BasketList, Products} = require('../models/models')
const sequelize = require('../db')

class BasketController{ //для группировки
    async add(req, res){
        try {
            const {basketId, productId} = req.body
            if(!basketId || !productId){
                return res.status(400).json({message: 'Нет обязательных параметров'})
            }
            const itemBasket = await BasketList.create({basketId, productId, count:1}) //функция принимает объект, где указываем нужные поля
            return res.json(itemBasket)
        } catch (error) {
            return res.status(400).json({message: 'Ошибка добавления товара в корзину'})
        }
        
    } 
    
    async getListUser(req, res){   
        const {basketId} = req.params
        const list = await sequelize.query(`select id, name, price, img, info, img, count from products, basket_lists
        where products.id = basket_lists."productId" and basket_lists."basketId" = ${basketId}`,
        { type: sequelize.QueryTypes.SELECT})
        return res.json(list)
    }


    async deleteItemList(req, res){ 
        try {
            const{basketId, productId} = req.params
            if(!basketId || !productId){
                return res.status(400).json({message: 'Нет обязательных параметров'})
            }
            const list = await BasketList.destroy({where:{basketId, productId}})
            return res.json(list) 
        } catch (error) {
            return res.status(400).json({message: 'Ошибка удаления'})
        }
        
    }

    async countPlus(req, res){
        const{basketId, productId} = req.body 
        let product = await BasketList.findOne({where:{productId, basketId}})
        await product.increment('count',{by:1})
        return res.json(product)
    }

    async countMinus(req, res){
        const{basketId, productId} = req.body
        let product = await BasketList.findOne({where:{productId, basketId}})
        await product.decrement('count',{by:1})
        return res.json(product)
    }

    async clearBasket(req, res){
        const{basketId} = req.query
        let product = await BasketList.destroy({where:{basketId}})
        return res.json(product)
    }
}

module.exports = new BasketController() 